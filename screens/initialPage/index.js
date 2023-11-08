import { View, Text, Image } from "react-native";
import CustomButton from "../../assets/components/buttons/customButton";
import WhiteButton from "../../assets/components/buttons/whiteButton";
import CustomInput from "../../assets/components/inputs/customInput";

function InitialPage({ navigation }) {
    const goLogin = () => {
        navigation.navigate("Login")
    }
    const goSignUp = () => {
        navigation.navigate("SignUp")
    }
    return (
        <View className="flex flex-1 flex-col items-center justify-center">
            <Image
                className="w-72 h-72"
                source={require("../../assets/images/donation.png")}></Image>
            <View className="w-full h-48 justify-between flex items-center my-2">
                <CustomButton name={"LOGIN"} event={() => goLogin()} />
                <CustomButton name={"CRIAR CONTA"} event={() => goSignUp()} />
                <View className="flex flex-row justify-end w-[90%]">
                    <WhiteButton name={"Seguir sem login"}/>
                    
                </View>
            </View>
        </View>
    );
}

export default InitialPage;