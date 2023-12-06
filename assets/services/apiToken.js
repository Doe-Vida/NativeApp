import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import apiDoeVida from "./apiDoeVida";
import { Alert } from "react-native";

function useSession(navigation) {
    const [att, setAtt] = useState(false)
    const [count, setCount] = useState(0)
    const [token, setToken] = useState({
        username: "loading...",
        access_token: "loading...",
        refresh_token: "loading..."
    })
    const [user, setUser] = useState({
        "birthdate": null,
        "blood_type": null,
        "city": null,
        "comments": "[]",
        "date_last_donation": null,
        "donations_orders": "[]",
        "first_name": null,
        "id": "0",
        "last_name": null,
        "password": "",
        "phone": null,
        "posts": "[]",
        "qty_donations": null,
        "sex": null,
        "state": null,
        "username": "Loading...",
        "isLoading": true
    })
    useFocusEffect(
        useCallback(() => {
            SecureStore.getItemAsync("token")
                .then(res => {
                    if (res == "" || res == null) {
                        console.log("null");
                        setToken({ "access_token": null, "refresh_token": null, "username": "Convidado" })
                        setUser({ "username": "Convidado", blood_type: null, guest: true })
                        return
                    }
                    res = JSON.parse(res)
                    setToken(res)
                    apiDoeVida.get(`users/${res.username}`,
                        { headers: { Authorization: "Bearer " + res.access_token } })
                        .then((res) => {

                            // console.log(res.data)
                            if (res.data['data'] == undefined) {
                                alert('error')
                                return
                            }
                            setUser(res.data['data'])
                        })
                        .catch(error_get => {
                            console.log(res);
                            count > 5 ?
                                Alert.alert(
                                    'Oops houve um erro.',
                                    'Não foi possivel acessar a sua conta',
                                    [
                                        {
                                            text: 'Voltar ao inicio',
                                            onPress: () => navigation.navigate("InitialPage"),
                                            style: 'ok',
                                        },
                                    ],
                                    {
                                        cancelable: false,
                                    },
                                )
                                :
                                apiDoeVida.post('refresh', {}, { headers: { Authorization: "Bearer " + res.refresh_token } })
                                    .then((res_refresh) => {
                                        console.log(count)
                                        SecureStore.setItemAsync("token", JSON.stringify({ "username": token.username, "refresh_token": res.refresh_token, "access_token": res_refresh.data['data'].access_token }))
                                        setCount(count + 1)
                                        setAtt(!att)
                                    })
                                    .catch((er) => {
                                        console.log(er);
                                        Alert.alert(
                                            'Sua seção expirou!',
                                            'Deseja fazer login novamente ou continuar como convidado?',
                                            [
                                                {
                                                    text: 'Continuar',
                                                    onPress: () => {
                                                        SecureStore.deleteItemAsync("token")
                                                        setAtt(!att)
                                                    },
                                                    style: 'cancel',
                                                },
                                                {
                                                    text: 'Fazer Login',
                                                    onPress: () => navigation.navigate("Login"),
                                                    style: 'ok',
                                                },
                                            ],
                                            {
                                                cancelable: false,
                                            },
                                        )
                                    })
                            // alert('Your session has expired')
                            // SecureStore.deleteItemAsync("token");

                            // navigation.navigate('Login');
                        })
                })
        }, [att])
    )
    return { user, token };
}

export default useSession;