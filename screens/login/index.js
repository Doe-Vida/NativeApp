import { Link } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import FormGenerator from "../../assets/components/formGenerator";
import { useState } from "react";
import CustomButton from "../../assets/components/customButton";

function Login({ navigation }) {
    const [dados, setDados] = useState({
        username: "adm@senha123.adm",
        password: "senha123",
    })
    


    const logar = () => {
        navigation.navigate("NavBar")
    }
    return (
        <View className="flex-1 items-center justify-center bg-pink-primary ">
            <View className="flex items-center bg-black w-10/12 p-2 rounded-xl">
            <Text className="text-white">
                Login
            </Text>
            {/* 
            Esse form generator é o que eu fiz com os validadores
            dentro de info os seguintes valores podem ser colocados:
                {
                    name: string
                    req: bool
                    min: number
                    max: number
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
                            type: "text",
                        },
                        {
                            title: "custom title",
                            placeholder: "custom placeholder",
                            type: "text",
                            name: "password",
                            isPassword: true
                        },
                    ]}
                />
            </View>
            <TouchableOpacity onPress={() => { logar() }} className='bg-slate-100 p-2 rounded-full'>
                <Text>Logar</Text>
            </TouchableOpacity>
            <Link to={"/NavBar"} >
                <View>
                    <Text className="bg-gray-900 text-white p-2 rounded-full">
                        Logar
                    </Text>
                </View>
            </Link>

        </View>
    );
}

export default Login;