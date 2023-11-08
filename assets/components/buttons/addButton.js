import { TouchableOpacity, View, Text} from "react-native";

const AddButton = ({event}) => {
    return ( 
            <TouchableOpacity className="h-16 w-16 flex items-center justify-center rounded-full bg-cyan" onPress={event}>
                <View className="w-4/6 h-1 bg-white rounded-full"></View>
                <View className="h-4/6 w-1 bg-white rounded-full absolute "></View>
            </TouchableOpacity>
    );
}
 
export default AddButton;