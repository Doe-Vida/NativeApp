import { BackHandler, ScrollView, View } from "react-native";
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
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Solicitacoes")
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View className='w-full flex items-center'>
      <ScrollView className='w-11/12 mb-2'>
        <View className='w-full flex items-center'>
          {bloodTypes.map((v, i) =>
            <View className='pt-2 w-11/12'>
              <BloodTypeCard key={i} type={v} />
            </View>
          )}

        </View>
      </ScrollView>
    </View>
  );
}

export default BloodTypesScreen;