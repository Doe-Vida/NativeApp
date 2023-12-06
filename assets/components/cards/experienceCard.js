import { Text, View } from "react-native";

function ExperienceCard({name, content}) {
    return ( 
        <View className='w-full bg-white rounded-lg p-2 border border-gray-300'>
            <Text className='font-semibold flex flex-col text-xl'>
                {name}
            </Text>
            <View className='h-px my-2 bg-black'></View>
            <View className='gap-2'>
                        <Text className='w-full p-2'>{content}</Text>
            </View>
        </View>
     );
}

export default ExperienceCard;