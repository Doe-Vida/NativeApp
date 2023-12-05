import { Alert, Text, View } from "react-native";
import FormGenerator from "../../assets/components/formGenerator";
import { useCallback, useEffect, useState } from "react";
import apiDoeVida from "../../assets/services/apiDoeVida"
import * as SecureStore from 'expo-secure-store';
import useSession from "../../assets/services/apiToken";
import { useFocusEffect } from "@react-navigation/native";

function EditProfileScreen({ navigation }) {
    // const [tokenAccess, setTokenAccess] = useState({ username: "", access_token: "", refresh_token: "" })
    // const pegarUser = () => {
    //     if (tokenAccess.access_token == "") {
    //         console.log("null");
    //         return
    //     }
    //     console.log("loading...");
    //     apiDoeVida.get(`users/${tokenAccess.username}`, { headers: { Authorization: "Bearer " + tokenAccess.access_token } })
    //     .then((res) => {
    //         console.log(res.data['data'])
    //         if (res.data['data'] == undefined){
    //             alert('error')
    //             return
    //         }
    //         setUser(res.data['data'])
    //     })
    //     .catch((res) => {
    //         console.log(res.response);
    //     })
    // }
    // const pegarToken = async () => {
    //     await SecureStore.getItemAsync("token").then(res => {
    //         // console.log(res);
    //         setTokenAccess(JSON.parse(res))
    //     })
    // }
    // useEffect(() => {
    //     console.log(tokenAccess);
    //     pegarUser()
    // }, [tokenAccess])
    // useEffect(()=>{
    //     console.log("updated");
    //     console.log(user);
    // }, [user])
    // useEffect(()=>{
    //     pegarToken()
    //     }
    // ,[])

    const [_user, _setUser] = useState({
        birthdate: "",
        blood_type: "",
        city: "",
        date_last_donation: "",
        first_name: "",
        last_name: "",
        phone: "",
        qty_donations: "",
        state: "",
    })
    // // id: "12",
    // // password: "changed_password",
    // // sex: false,
    // // username: "jeffersondsad"
    const { user, token } = useSession(navigation)
    useFocusEffect(
        useCallback(() => {
            console.log(">>>>>>>>>>>");
            console.log(user);
            console.log(token)
            _setUser(user)
        }, [user])
    )

    const commit = () => {
        if (token.access_token == "Loading..." || token.access_token == null) {
            Alert.alert(
                "Atenção!",
                "Você precisa estar logado para isso",
                [
                    {
                        text: 'Ok',
                        onPress: () => { },
                        style: 'ok',
                    },
                ],
                {
                    cancelable: true,
                },
            )
        } else {
            putUser()
        }
    }

    const putUser = () => {
        console.log("inicializing...");
        apiDoeVida.put(`users/${token.username}`, _user, {
            headers: {
                Authorization: "Bearer " + token.access_token
            }
        })
            .then((res) => {
                console.log(res.data);
            })
    }
    const bloodTypes = [
        // { label: 'nullify', value: null },
        { label: 'A+', value: 'A+' },
        { label: 'A-', value: 'A-' },
        { label: 'B+', value: 'B+' },
        { label: 'B-', value: 'B-' },
        { label: 'AB+', value: 'AB+' },
        { label: 'AB-', value: 'AB-' },
        { label: 'O+', value: 'O+' },
        { label: 'O-', value: 'O-' },
    ];
    const estados = [
        { label: 'SP', value: 'SP' },
        { label: 'MG', value: 'MG' },
        { label: 'BH', value: 'BH' },
        { label: 'AM', value: 'AM' },
    ]
    return (
        <View>
            <View className='h-3 w-full'></View>
            <FormGenerator
                // "default", 
                // 'numeric', 
                // 'email-address', 
                // "ascii-capable", 
                // 'numbers-and-punctuation', 
                // 'url', 
                // 'number-pad', 
                // 'phone-pad', 
                // 'name-phone-pad', 
                // 'decimal-pad', 
                // 'twitter', 
                // 'web-search', 
                // 'visible-password'
                info={[
                    { name: "first_name", placeholder: "Primeiro Nome" },
                    { name: "last_name", placeholder: "Último Nome" },
                    { name: "phone", placeholder: "Celular", type: "phone-pad" },
                    { name: "blood_type", placeholder: "Tipo Sanguíneo", data: bloodTypes },
                    // { name: "sex", placeholder: "sexo" },
                    { name: "telefone", placeholder: "Telefone" },
                    { name: "birthdate", placeholder: "Data de Nascimento", type:'date' },
                    { name: "state", placeholder: "Estado", data: estados, search: true },
                    { name: "city", placeholder: "Cidade" },
                    { name: "qty_donations", placeholder: "Quantidade de Doações Realizadas", type: "numeric" },
                    { name: "date_last_donation", placeholder: "Data da Última Doação", type:'date' },
                ]}
                buttonName={"SALVAR"}
                submitAction={commit}
                dados={_user} setDados={_setUser} />
        </View>
    );
}

export default EditProfileScreen;