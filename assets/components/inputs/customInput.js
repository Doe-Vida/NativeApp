import { View, Text, TextInput } from "react-native";

const CustomInput = ({ onChangeText, placeholder, type, value, isPassword, iconLeft, iconRight }) => {
    const transform = (par) => {
        if (par == undefined) {
            return
        }
        return (par.charAt(0).toUpperCase() + par.slice(1)).replace(/_/g, " ")
    }

    placeholder = transform(placeholder)

    return (
        <View className="w-[100%] flex flex-row items-center">
            {iconLeft == null ? <View></View> :
                <Text className="absolute ml-3">{iconLeft}</Text>
            }

            <TextInput
                className="p-2 px-8 w-full rounded-full border border-gray-330"
                value={value}
                keyboardType={type != undefined ? type : "default"}
                secureTextEntry={isPassword == undefined ? false : isPassword}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={"#a9a9a9"}
            />
            {iconRight == null ? <View></View> :
                <View className="absolute w-full flex flex-row justify-end">
                    <Text className=" mr-3">{iconRight}</Text>
                </View>
            }


        </View>
    );
}

export default CustomInput;