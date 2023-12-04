import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import apiDoeVida from "../../../assets/services/apiDoeVida";
import { useCallback, useEffect, useState } from "react";
import ExperienceCard from "../../../assets/components/cards/experienceCard";
import { useFocusEffect } from "@react-navigation/native";

function ExperiencesScreen({ navigation }) {
    const [experiences, setExperiences] = useState([{ user: { first_name: "" }, content: "" }])
    const getExperiences = () => {
        apiDoeVida.get('/posts')
            .then(
                res =>
                    setExperiences(res.data['data'])
            )
    }
    useFocusEffect(useCallback(() => {
        getExperiences()
    }, []))
    return (
        <View className='flex items-center justify-center h-full w-full'>
            <TouchableOpacity onPress={() => navigation.navigate("Experience")} className='absolute z-50 bottom-2 right-4 rounded-full w-16 h-16 bg-pink-primary flex items-center justify-center'><Text className='text-white text-2xl'>+</Text></TouchableOpacity>

            <ScrollView className='w-11/12'>
                <View className='w-full flex items-center'>
                    <View className='flex items-center mt-2 w-11/12 '>
                        {experiences.map(experience =>
                            <View className='w-full mb-2'>
                                <ExperienceCard name={experience.user.first_name} content={experience.content} />
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}

export default ExperiencesScreen;