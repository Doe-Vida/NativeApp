import { View, Image, Text, Alert } from "react-native";
// import CustomInput from "../../assets/components/customInput";
// import CustomButton from "../../assets/components/buttons/customButton";
import { useState } from "react";
import FormGenerator from "../../assets/components/formGenerator";
import apiDoeVida from "../../assets/services/apiDoeVida";

function SignUpScreen({navigation}) {
    const [dados, setDados] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const passwordCheck = () =>{
    }
    const confirmPasswordCheck = (e) =>{
        if (e != dados.password){
            return "Senhas são diferentes"
        }
    }
    const signUp = () =>{
        console.log("taino");
        /*
        fazer um loading enquanto esta em promise
        */
        apiDoeVida.post('users', {
            "password": dados.password,
            "username": dados.email    
        }).then(res => {
            Alert.alert("Sucesso", "Conta criada com sucesso!", [{
                text:"ok",
                onPress: ()=> navigation.navigate("Login")
            }])
            alert("Conta criada com sucesso!"); 
            }).catch(res => console.log(JSON.stringify(res.response.data)))
    }

    return (
        <View className="flex-1 flex flex-col items-center justify-start">
            <Image className="w-72 h-72" source={require('../../assets/images/doctor.png')} />

            <View className="w-[90%]">
                <FormGenerator
                    dados={dados}
                    setDados={setDados}
                    info={
                        [
                            { name: "email", placeholder: "E-mail", req: true },
                            { name: "password", placeholder: "Senha", isPassword:true, req: true, min: 6, specificValidator: passwordCheck() },
                            { name: "confirmPassword", placeholder: "Confirmar Senha", isPassword:true, req: true, specificValidator: (e)=> confirmPasswordCheck(e) },
                        ]
                    }
                    buttonName={'ENTRAR'} 
                    submitAction={() => signUp()}/>
            </View>
            <View className="flex flex-row w-full text-center items-center justify-center">
                <View className="w-24 mx-2 h-[3px] rounded-full bg-gray-220"></View>
                <Text className='text-gray-110'>Ou entre com</Text>
                <View className="w-24 mx-2 h-[3px] rounded-full bg-gray-220"></View>
            </View>
            <View className='flex flex-row w-32 justify-between'>
                <Image source={require("../../assets/images/third_party/google_icon.png")} className='w-14 h-14 bg-white rounded-full border'></Image>
                <Image source={require("../../assets/images/third_party/facebook_icon.png")} className='w-14 h-14 bg-white rounded-full border'></Image>

            </View>
        </View>
    );
}

export default SignUpScreen;