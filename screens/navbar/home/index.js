import { useEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native";
import getToken from "../../../assets/services/getToken";
import * as SecureStore from 'expo-secure-store';


function HomeScreen() {
    const [tokenAccess, setTokenAccess] = useState({})
    useEffect(() => {
        pegarToken()
        // setTokenAccess(JSON.parse(await getToken()))
        // 


    }, [])
    const pegarToken = async () => {
        await SecureStore.getItemAsync("token").then(res => {
            // console.log(res);
            setTokenAccess(JSON.parse(res))
        })
    }
    useEffect(()=>{
        console.log(tokenAccess);
    }, [tokenAccess])

    return (
        <View className="flex-1 items-center justify-center bg-pink-primary ">
            <Text>HomeScreen</Text>
            <Text>{JSON.stringify(tokenAccess)}</Text>
            
        </View>
    );
}

export default HomeScreen;