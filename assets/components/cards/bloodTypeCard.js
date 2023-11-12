import { Text, View } from "react-native";
import { Iconify } from "react-native-iconify";



function BloodTypeCard({ type = "A+" }) {

    switch (type.toUpperCase()) {
        case "A+":
            var donate = ["A+", "AB+"]
            var receive = ["A+", "A-", "O+", "O-"]
            break;
        case "A-":
            var donate = ["A+", "A-", "AB+", "AB-"]
            var receive = ["A-", "O-"]
            break;
        case "B+":
            var donate = ["B+", "AB+"]
            var receive = ['B+', 'B-', 'O+', 'O-']
            break;
        case "B-":
            var donate = ['B+', 'B-', 'AB+', 'AB-']
            var receive = ['B-', 'O-']
            break;
        case "AB+":
            var donate = ['AB+']
            var receive = ['Todos os tipos']
            break;
        case "AB-":
            var donate = ['AB+', 'AB-']
            var receive = ['A-', 'B-', 'O-', 'AB-']
            break;
        case "O+":
            var donate = ['A+', 'B+', 'O+', 'AB+']
            var receive = ['O+', 'O-']
            break;
        case "O-":
            var donate = ['Todos os tipos']
            var receive = ['O-']
            break;
        default:
            var donate = ["Blood Types"]
            var receive = ["Blood Types"]
            break;
    }
    return (
        <View className='w-10/12 border border-gray-110 rounded-2xl flex flex-row items-center p-2'>
            <View className='flex justify-center items-center mr-3'>
                <View className='absolute z-50'>
                    <Text className=' -mt-2 text-white font-semibold text-2xl'>A+</Text>
                </View>
                <Iconify icon="mdi:cards-heart" size={75} color="#F50057" />
            </View>
            <View>
                <Text>Doa Para: {donate.map((v, i, a) => v + (i == a.length - 1 ? "" : ", "))}</Text>
                <Text>Redebe de: {receive.map((v, i, a) => v + (i == a.length - 1 ? "" : ", "))}</Text>
            </View>
        </View>
    );
}

export default BloodTypeCard;