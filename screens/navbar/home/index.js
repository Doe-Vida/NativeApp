import { useCallback, useEffect, useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from "react-native";
import getToken from "../../../assets/services/getToken";
import * as SecureStore from 'expo-secure-store';
import apiDoeVida from "../../../assets/services/apiDoeVida";
import { Ionicons } from "@expo/vector-icons";
import { } from 'react-dom'
import Icon from "react-native-vector-icons"
import { useFocusEffect, useNavigationState } from "@react-navigation/native";
import useSession from "../../../assets/services/apiToken";
import { Iconify } from "react-native-iconify";

function HomeScreen({ navigation }) {
    const { user } = useSession(navigation)
    

    const goEditPerfil = () => {
        navigation.navigate('EditProfile')
    }

    return (
        <View className="flex-1  bg-pink-primary ">
            <View className='w-full h-[25%] flex justify-end'>
                <View className="flex flex-row justify-center items-center w-full ">
                    <Text className="text-white font-bold ">Doe Vida</Text>
                    <View className='absolute right-10'>
                        <Ionicons name="notifications" size={32} color={"#fff"} />
                    </View>
                </View>
                <View className='flex flex-row items-center'>
                    <View className='h-[96px] w-[96px] mx-4 rounded-full items-center justify-center bg-white'>
                        <Image source={require("../../../assets/images/user_default.png")} className="h-[90px] w-[90px] bg-black rounded-full"></Image>
                    </View>
                    <View className="">
                        <Text className="font-bold  text-white">
                            {user.first_name?
                                user.first_name.charAt(0).toUpperCase()
                                + user.first_name.slice(1)
                                + " "
                                + (user.last_name?
                                    user.last_name.charAt(0).toUpperCase()
                                    + user.last_name.slice(1) : "")
                                : user.username ?? ''}
                        </Text>

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
                <TouchableOpacity onPress={() => goEditPerfil()} className='w-14 h-14 rounded-full bg-white flex items-center justify-center absolute right-10'>
                <Iconify icon="mingcute:user-edit-line" size={40} color={"#ff0000"}></Iconify>
                </TouchableOpacity>
            </View>
            <View className='bg-white h-[65%] w-full rounded-t-3xl flex flex-col'>
                <View className='flex flex-row h-20 w-full items-center'>
                    <View className='w-[50%] h-full flex items-center justify-center'>
                        <Text className="font-bold">
                            {user.date_last_donation ?? "-"}
                        </Text>
                        <Text>
                            Última doação
                        </Text>
                    </View>
                    <View className='bg-gray-50 w-px h-4/6'>

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
                    <Text className="font-bold ml-8">Inspire-se</Text>
                    <ScrollView horizontal className="space-x-2 mt-2 py-4">
                        <View className="ml-6"></View>
                        <View className='border border-gray-110 rounded-3xl overflow-hidden'>
                            <Image className='w-60 h-36 ml-2' source={require("../../../assets/images/frases/donate_blood_life.png")}></Image>
                        </View>
                        <View className='border border-gray-110 rounded-3xl overflow-hidden'>
                            <Image className='w-60 h-36' source={require("../../../assets/images/frases/convey_love.png")}></Image>
                        </View>
                        <View className='border border-gray-110 rounded-3xl overflow-hidden'>
                            <Image className='w-60 h-36' source={require("../../../assets/images/frases/donate_is_good.png")}></Image>
                        </View>
                        <View className="mr-6"></View>
                    </ScrollView>
                </View>
            </View>

        </View>
    );
}

export default HomeScreen;