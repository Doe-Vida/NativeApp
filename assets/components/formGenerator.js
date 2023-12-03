import { useRef, useState } from "react";
import { View, KeyboardType } from "react-native";
import InputGenerator from "./inputs/inputGenerator";
import CustomButton from "./buttons/customButton";

const infotype = {
    name: "",
    req: false,
    min: 0,
    max: 0,
    type: "",
    customClass:"",
    data:[{ label: 'label', value: 'value' }],
    date: false,
    specificValidator: () => { },
    placeholder: "",
    isPassword: false,
    description: <View></View>,
}


function FormGenerator({ dados, setDados, info = [infotype], submitAction = () => { }, buttonName, secondButtonName, secondButtonFunction }) {
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
            <View className="w-5/6">
                <InputGenerator ref={childRef} dados={dados} setDados={setDados} info={info} errors={errors} setErrors={setErrors}  />
            </View>
            {/* <View className="p-2"></View> */}
            <View className="flex flex-row w-[100%] justify-around items-center " >
                <View className={secondButtonName == undefined ? "hidden" : `w-[40%]`}>
                    <CustomButton name={secondButtonName} event={() => secondButtonFunction()} />
                </View>
                <View className={secondButtonName == undefined ? "flex flex-row w-[100%] justify-around items-center" : `w-[40%]`}>
                    <CustomButton name={buttonName} event={() => verification()} />
                </View>
            </View>
        </View>
    );
}

export default FormGenerator;