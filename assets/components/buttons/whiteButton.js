import { TouchableOpacity, View, Text} from "react-native";

const WhiteButton = ({name, event}) => {
    return ( 
        <View className="w-[50%]">
            <TouchableOpacity className="h-[40px] flex items-center justify-center border border-gray-330 rounded-full bg-white" onPress={event}>
                <Text className=" text-[16px] font-semibold text-pink-primary">{name}</Text>
            </TouchableOpacity>
        </View>
    );
}
 
export default WhiteButton;