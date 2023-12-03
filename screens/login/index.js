import { Link } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import FormGenerator from "../../assets/components/formGenerator";
import { useState } from "react";
// import CustomButton from "../../assets/components/buttons/customButton";
import apiDoeVida from "../../assets/services/apiDoeVida";
import setToken from "../../assets/services/setToken";
import * as SecureStore from 'expo-secure-store';


function LoginScreen({ navigation }) {
    const [hide, setHide] = useState(true)
  

    const Modal = () => hide ? <View></View> :
        <View className='absolute h-full w-full'>
            <TouchableOpacity onPress={() => setHide(true)} className='bg-[#0000008c] z-40 flex h-full w-full items-center justify-center'>
            </TouchableOpacity>
            <View className='absolute w-full h-full flex items-center justify-center'>
                <View className='bg-white flex z-50 p-16 rounded'>
                    <ActivityIndicator size={"large"}></ActivityIndicator>
                    <Text className='text-center'>
                        Carregando
                    </Text>
                </View>


            </View>
        </View>

    const [dados, setDados] = useState({
        username: "meira.gmrm@hotmail.com",
        password: "SenhaForte",
    })
    
    
    const logar = async() => {
        console.log("connecting...");
        setHide(false)
        apiDoeVida.post('login', dados)
        .then(async(res)=>{
            console.log(res.data['data']);
            SecureStore.setItemAsync("token", JSON.stringify({username: dados['username'] , ...res.data['data']}))
            // await setToken(JSON.stringify(res.data.data))
            navigation.navigate("NavBar");
        })
        .catch(res=>
            // alert(JSON.stringify(res.response.data))
            alert("Usuario ou senha errado")
            )
        .finally(()=>setHide(true))
    }
    return (
        <View className="flex-1 items-center justify-center ">
            <Modal></Modal>
            <View className="flex items-center w-10/12 p-2 rounded-xl">
            <Image className="w-72 h-72" source={require('../../assets/images/doctors.png')}></Image>
            {/* 
            Esse form generator é o que eu fiz com os validadores
            dentro de info os seguintes valores podem ser colocados:
                {
                    name: string
                    req: bool
                    min: number
                    max: number
                    type: string, como é um arquivo javacript não puxa os tipos, porem deve ser
                    "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad" | "url"
                    specificValidator: function -> exemplo:     
                                            (e) => {
                                                // faz a verificação e se não estiver de acordo com a regra retorna uma string
                                                if (e!="erro"){
                                                    return "erro"
                                                }
                                                // se estiver de acordo retorna undefined e deixa passar
                                                else{
                                                    return undefined
                                                }
                                            }
                    placeholder: string
                    isPassword: bool
                    description: component
                }
                apenas name é obrigatorio, e deve ser igual ao valor em dados
                exemplo, se dados for
                ...
                const [dados, setDados] = useState({
                    username: "",
                    password: "",
                })
                ...
                então o info do form deve conter um username e um password
                ...
                info = {
                    [
                        {name:"username"},
                        {name:"password"},
                    ]
                }
                ...
            */}
                <FormGenerator
                    dados={dados}
                    setDados={setDados}
                    buttonName={"Login"}
                    submitAction={logar}
                    info={[
                        {
                            name: "username",
                            type: "default",
                        },
                        {
                            title: "custom title",
                            placeholder: "custom placeholder",
                            type: "default",
                            name: "password",
                            isPassword: true
                        },
                    ]}
                />
            </View>
            {/* <TouchableOpacity onPress={() => { navigation.navigate("NavBar"); }} className='bg-slate-100 p-2 rounded-full'>
                <Text>Logar</Text>
            </TouchableOpacity>
            <Link to={"/NavBar"} >
                <View>
                    <Text className="bg-gray-900 text-white p-2 rounded-full">
                        Logar
                    </Text>
                </View>
            </Link> */}

        </View>
    );
}

export default LoginScreen;