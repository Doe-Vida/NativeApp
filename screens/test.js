import { Text, View } from "react-native";
import CustomInput from "../assets/components/inputs/customInput";
import InputGenerator from "../assets/components/inputs/inputGenerator";
import { useState } from "react";
import FormGenerator from "../assets/components/formGenerator";
import { Iconify } from 'react-native-iconify';
import BloodTypeCard from "../assets/components/cards/bloodTypeCard";

function TestPage() {
    const [dados, setDados] = useState({
        username: "meira.gmrm@hotmail.com",
        password: "SenhaForte",
    })
    return (
        <View className="flex-1 bg-white items-center">
            <Text>
                Test Page
            </Text>
            


            <View className="flex-1  bg-white items-center justify-center">

                <FormGenerator
                    dados={dados}
                    setDados={setDados}
                    buttonName={"Login"}
                    submitAction={() => { }}
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
                <CustomInput value={dados.username} />
            </View>
        </View>
    );
}

export default TestPage;