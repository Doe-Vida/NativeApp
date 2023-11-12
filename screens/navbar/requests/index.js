import { Link } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

function RequestsScreen({ navigation }) {
    return ( 
        <View>
            <Text>
                requests
                <Link to={"/BloodTypes"}><Text>bbbbbb</Text></Link>
                {/* <TouchableOpacity onPress={()=>navigation.navigate("BloodTypes")}><Text>aaaaaa</Text></TouchableOpacity> */}
            </Text>
        </View>
     );
}

export default RequestsScreen;