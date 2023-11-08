import { TouchableOpacity, View, Text} from "react-native";

const CustomButton = ({name, event}) => {
    return ( 
        <View className="w-[90%]">
            <TouchableOpacity className="h-[55px] flex items-center justify-center rounded-full bg-pink-primary" onPress={event}>
                <Text className="text-[20px] text-white">{name}</Text>
            </TouchableOpacity>
        </View>
    );
}
 
export default CustomButton;