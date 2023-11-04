import { useEffect, useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from "react-native";
import getToken from "../../../assets/services/getToken";
import * as SecureStore from 'expo-secure-store';
import apiDoeVida from "../../../assets/services/apiDoeVida";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons"

function HomeScreen() {
    const [tokenAccess, setTokenAccess] = useState({ username: "", access_token: "", refresh_token: "" })
    const [user, setUser] = useState({
        "birthdate": null,
        "blood_type": null,
        "city": null,
        "comments": "[]",
        "date_last_donation": null,
        "donations_orders": "[]",
        "first_name": "null",
        "id": "0",
        "last_name": "null",
        "password": "",
        "phone": null,
        "posts": "[]",
        "qty_donations": null,
        "sex": null,
        "state": null,
        "username": "username",

    })
    useEffect(() => {
        // pegarToken()
        // setTokenAccess(JSON.parse(await getToken()))
        // 


    }, [])
    const pegarUser = () => {
        if (tokenAccess.access_token == "") {
            console.log("null");
            return
        }
        console.log("loading...");
        apiDoeVida.get(`users/${tokenAccess.username}`, { headers: { Authorization: "Bearer " + tokenAccess.access_token } })
            .then((res) => {
                console.log(res.data)
                setUser(res.data['data'])
            })
            .catch((res) => {
                console.log(res.response);
            })
    }
    const pegarToken = async () => {
        await SecureStore.getItemAsync("token").then(res => {
            // console.log(res);
            setTokenAccess(JSON.parse(res))
        })
    }

    useEffect(() => {
        console.log(tokenAccess);
        pegarUser()
    }, [tokenAccess])

    return (
        <View className="flex-1  bg-pink-primary ">
            <View className='w-full h-[30%] flex justify-end'>
                <View className="flex flex-row justify-center items-center w-full ">
                    <Text className="text-white font-bold ">Doe Vida</Text>
                    <View className='absolute right-10'>
                    <Ionicons name="notifications" size={36} color={"#fff"} />
                    </View>
                </View>
                <View className='flex flex-row items-center'>
                    <View className='h-[96px] w-[96px] mx-4 rounded-full items-center justify-center bg-white'>
                        <Image className="h-[90px] w-[90px] bg-black rounded-full"></Image>
                    </View>
                    <View className="">
                        <Text className="font-bold text-white">{user.first_name != null ? user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1) + " " + (user.last_name != null ?user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1) : "") : user.username}</Text>
                        <Text className='text-white'>{user.qty_donations ?? 0} doações realizadas</Text>
                    </View>
                </View>
            </View>
            <View className='w-full h-[10%]'>
                {/*<View className='w-full flex items-end'>
                     <View className='
            bg-white 
            w-[20%] h-5 
            rounded-full
            rotate-[8deg]
            right-0
            bottom-0
            '></View>
                </View>
                <View className='
            bg-white 
            w-[80%] h-5 
            rounded-full
            rotate-[-10deg]
            left-0
            bottom-0
            '></View> */}
                {/* <View className="w-48 h-[50%] bg-white"></View> */}
                <TouchableOpacity className='w-14 h-14 rounded-full bg-white flex items-center justify-center absolute right-10'>
                    <Ionicons name="person-outline" color={"#ff0000"} size={30} />
                    <View className='absolute right-1 bottom-1'>
                        <Ionicons name="pencil" color={"#ff0000"} size={30} />
                    </View>
                </TouchableOpacity>
            </View>
            <View className='bg-white h-[60%] w-full rounded-t-3xl flex flex-col'>
                <View className='flex flex-row h-20 w-full'>
                    <View className='w-[50%] h-full flex items-center justify-center border-gray-50 border-r'>
                        <Text className="font-bold">
                            {user.date_last_donation ?? "-"}
                        </Text>
                        <Text>
                            Última doação
                        </Text>
                    </View>
                    <View className='w-[50%] h-full flex items-center justify-center '>
                        <Text className="font-bold">
                            {user.blood_type ?? "Não preenchido"}
                        </Text>
                        <Text>
                            Tipo Sanguíneo
                        </Text>
                    </View>
                </View>
                <View className='w-full h-44 flex flex-row items-center justify-evenly'>
                    <View className='h-36 w-36 items-center justify-center bg-white rounded-3xl' style={{
                        shadowColor: '#7F5DF0',
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.5,
                        elevation: 5
                    }}>
                        <Ionicons name="document-text-outline" size={55} color={"#000000"} />
                        <Text>Teste de aptidão</Text>
                    </View>
                    <View className='h-36 w-36 items-center justify-center bg-white rounded-3xl' style={{
                        shadowColor: '#7F5DF0',
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.5,
                        elevation: 5
                    }}>
                        <Ionicons name="return-up-forward" size={55} color={"#000000"} />
                        <Text>Passo a passo</Text>
                    </View>
                </View>
                <View>
                    <Text className="font-bold ml-8 ">Inspire-se</Text>
                    <ScrollView horizontal className="space-x-2 mt-2">
                        <Image className='w-60 h-28 rounded-xl ml-2' source={require("../../../assets/images/frases/convey_love.png")}></Image>
                        <Image className='w-60 h-28 rounded-xl ' source={require("../../../assets/images/frases/convey_love.png")}></Image>
                        <Image className='w-60 h-28 rounded-xl ' source={require("../../../assets/images/frases/convey_love.png")}></Image>
                    </ScrollView>
                </View>
            </View>

        </View>
    );
}

export default HomeScreen;