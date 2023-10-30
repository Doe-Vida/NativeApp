import { useRef, useState } from "react";
import { View } from "react-native";
import InputGenerator from "./inputGenerator";
import CustomButton from "./customButton";

const infotype = {
    name: "",
    req: false,
    min: 0,
    max: 0,
    specificValidator: ()=>{},
    placeholder: "",
    isPassword: false,
    description: <View></View>,
}


function FormGenerator({ dados, setDados, info = [infotype], submitAction = ()=>{}, buttonName, secondButtonName, secondButtonFunction }) {
    const [errors, setErrors] = useState({
    })
    const childRef = useRef();
    const verification = () => {
        var error = childRef.current.validate()
        var validated = true

        Object.entries(error).forEach(([key, value]) => {
            if (value != undefined) {
                validated = false
            }
        });

        if (validated) {
            submitAction()
        }

    }
    return (
        <View className='flex w-[100%] justify-evenly items-center '>
            <InputGenerator ref={childRef} dados={dados} setDados={setDados} info={info} errors={errors} setErrors={setErrors} />
            <View className="p-2"></View>
            <View className="flex flex-row w-[100%] justify-around items-center " >
                <View className={secondButtonName == undefined ? "hidden" : `w-[40%]`}>
                    <CustomButton name={secondButtonName} evento={() => secondButtonFunction()} />
                </View>
                <View className={secondButtonName == undefined ? "flex flex-row w-[100%] justify-around items-center" : `w-[40%]`}>
                    <CustomButton name={buttonName} evento={() => verification()} />
                </View>
            </View>
        </View>
    );
}

export default FormGenerator;