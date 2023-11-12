import { View } from "react-native";
import BloodTypeCard from "../../../assets/components/cards/bloodTypeCard";
import { useEffect } from "react";

function BloodTypesScreen({ navigation }) {
    const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-",]

    // useEffect(() => {
    //     navigation.getParent().setOptions({
    //         tabBarStyle: {
    //             display: "none"
    //         }
    //     })
    //     return () => navigation.getParent()?.setOptions({
    //         tabBarStyle: undefined
    //     });
    // }, [navigation])

    return (
        <View>
            {bloodTypes.map((v, i) =>
                <BloodTypeCard key={i} type={v} />
            )}

        </View>
    );
}

export default BloodTypesScreen;