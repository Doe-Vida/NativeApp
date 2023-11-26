import { Link, useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as SecureStore from 'expo-secure-store';
import apiDoeVida from "../../../assets/services/apiDoeVida";
import useSession from "../../../assets/services/apiToken";
import RequestCard from "../../../assets/components/cards/requestCard";

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
    useEffect(()=>{
        if (user != undefined){
            alert(user.blood_type??"erro")
            
        }
    }, [user])

    const goEditPerfil = () => {
        navigation.navigate('EditProfile')
    }

    return ( 
        <View className='flex items-center'>
            <Text>
                requests
                {/* <Link to={"/BloodTypes"}><Text>bbbbbb</Text></Link> */}
                {/* <TouchableOpacity onPress={()=>navigation.navigate("BloodTypes")}><Text>aaaaaa</Text></TouchableOpacity> */}
            </Text>
            <RequestCard ></RequestCard>
        </View>
     );
}

export default RequestsScreen;