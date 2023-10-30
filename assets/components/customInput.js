import { View, Text, TextInput} from "react-native"; 

const CustomInput = ({onChangeText, placeholder, type, value, isPassword}) => {
    const transform = (par)=>{
        return (par.charAt(0).toUpperCase() + par.slice(1)).replace(/_/g," ")
    }

    placeholder = transform(placeholder)

    return (
        <View className="w-[100%]">
            <TextInput 
                className="p-3 rounded-full border border-[#BB0FD7]" 
                value={value} 
                keyboardType={type != undefined? type : "default"} 
                secureTextEntry={isPassword == undefined? false : isPassword} 
                onChangeText={onChangeText} 
                placeholder={placeholder}
                placeholderTextColor={"#a9a9a9"} 
                
                >
            </TextInput>
        </View>
    );
}

export default CustomInput;