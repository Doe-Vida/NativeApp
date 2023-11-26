import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import apiDoeVida from "./apiDoeVida";

function useSession(navigation) {
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
    })


    useFocusEffect(
        useCallback(() => {
            console.log("aaaaaa");
            SecureStore.getItemAsync("token")
                .then(res => {
                    console.log("res:");
                    setToken(JSON.parse(res))
                    res = JSON.parse(res)
                    console.log("^^^^^^");
                    if (res.access_token == "") {
                        console.log("null");
                        return
                    }
                    console.log("loading...");
                    apiDoeVida.get(`users/${res.username}`, { headers: { Authorization: "Bearer " + res.access_token } })
                        .then((res) => {
                            console.log(res.data)
                            if (res.data['data'] == undefined) {
                                alert('error')
                                return
                            }
                            setUser(res.data['data'])
                        })
                        .catch(res => {
                            // console.log(res);

                            alert('Your session has expired')
                            SecureStore.deleteItemAsync("token");

                            navigation.navigate('Login');
                        })
                })
        }, [])
    )
    // useFocusEffect(
    //     useCallback(()=>{

    //     },[])
    // )
    return { user, token };
}

export default useSession;