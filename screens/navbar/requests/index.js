import { Link, useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as SecureStore from 'expo-secure-store';
import apiDoeVida from "../../../assets/services/apiDoeVida";
import useSession from "../../../assets/services/apiToken";
import RequestCard from "../../../assets/components/cards/requestCard";
import GetRequests from "../../../assets/components/getRequests";
import FormGenerator from "../../../assets/components/formGenerator";

function RequestsScreen({ navigation }) {
    // const [tokenAccess, setTokenAccess] = useState({ username: "", access_token: "", refresh_token: "" })

    // const pegarUser = () => {
    //     if (tokenAccess.access_token == "") {
    //         console.log("null");
    //         return
    //     }
    //     console.log("loading...");
    //     apiDoeVida.get(`users/${tokenAccess.username}`, { headers: { Authorization: "Bearer " + tokenAccess.access_token } })
    //         .then((res) => {
    //             console.log(res.data)
    //             console.log("|" + res.data['data'].first_name + "|")
    //             console.log("||")
    //             if (res.data['data'] == undefined) {
    //                 alert('error')
    //                 return
    //             }
    //             setUser(res.data['data'])
    //         })
    //         .catch((res) => {
    //             console.log(res.response);
    //         })
    // }
    // const pegarToken = async () => {
    //     await SecureStore.getItemAsync("token").then(res => {
    //         // console.log(res);
    //         setTokenAccess(JSON.parse(res))
    //     })
    // }
    // const [user, setUser] = useState()
    // useFocusEffect(
    //     useCallback(() => {
    //         pegarToken()
    //     }, [])
    // )
    // useEffect(() => {
    //     console.log(tokenAccess);
    //     pegarUser()
    // }, [tokenAccess])
    const { user, token } = useSession(navigation)
    const [dado, setDado] = useState({
        blood_type: user.blood_type
    })
    const [bt, setBt] = useState(null)

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
    useFocusEffect(useCallback(() => {
            if (user.isLoading) {
                return
            }
            // alert(user.blood_type ?? "erro")

            console.log(user);
            setDado({ blood_type: user.blood_type })
            setBt(user.blood_type)
        }, [user]))

    const goEditPerfil = () => {
        navigation.navigate('EditProfile')
    }

    const alterar = () => {
        setBt(dado.blood_type)
        setHide(true)
    }
    const [hide, setHide] = useState(true)
    

    const Modal = () => hide ? <View></View> :
        <View className='absolute h-full w-full'>
            <TouchableOpacity onPressIn={() => setHide(true)} className='bg-[#0000008c] z-40 flex h-full w-full items-center justify-center'>
            </TouchableOpacity>
            <View className='absolute w-full h-full flex items-center justify-center'>
                <View className='bg-white flex z-50 w-[80%] p-5 rounded'>
                    <FormGenerator
                        dados={dado}
                        setDados={setDado}
                        info={[{ name: "blood_type", data: bloodTypes, placeholder: "Tipo Sanguíneo" }]}
                        submitAction={() => alterar()}
                        buttonName={"Alterar"}
                    ></FormGenerator>
                    <Text className='flex items-center text-pink-primary'>
                        *Essa alteração não é permanente, para isso va ao
                        <TouchableOpacity onPress={() => { setHide(true); goEditPerfil() }} className='flex items-center '>
                            <Text className='text-blue-500'>
                                {' perfil'}
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>


            </View>
        </View>


    return (
        user.isLoading ?
            <View className='flex flex-1 items-center justify-center'>
                <Text className='font-semibold text-2xl'>
                    Loading...
                </Text>
            </View>
            :
            <View className=''>
                {
                    bt ?
                        <View className='flex w-full h-full items-center'>
                            <Modal></Modal>
                            <TouchableOpacity onPress={() => setHide(false)}><Text className='p-3 m-5 bg-pink-primary text-white rounded-md'>Alterar</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Request")} className='absolute z-50 bottom-2 right-4 rounded-full w-16 h-16 bg-pink-primary flex items-center justify-center'><Text className='text-white text-2xl'>+</Text></TouchableOpacity>
                            <GetRequests bloodType={bt} />
                        </View>
                        :
                        <View className='flex h-full w-full items-center justify-center'>
                            <Modal></Modal>
                            <Text className='font-semibold text-2xl p-5'>
                                Voce precisa preencher seu tipo sanguineo para continuar
                            </Text>
                            <TouchableOpacity onPress={() => setHide(false)}><Text className='p-3 bg-pink-primary text-white rounded-md'>Alterar</Text></TouchableOpacity>
                        </View>
                }
            </View>
    );
}

export default RequestsScreen;