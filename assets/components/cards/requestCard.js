import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Iconify } from "react-native-iconify";

const req = {
    patientName: "Loading...",
    patientType: "A+",
    description: "some description goes here",
    location: "Idk how it will be",
    requesterName: "Loading...",
    requesterPhone: "Loaging",
    qtdBloodBags: "0",
    date: "00/00/0000",
}

function RequestCard( {request = req} ) {
    const [clicked, setClicked] = useState(false)
    return (
        <View className='w-[90%] border rounded-lg p-4'>
            <View className='flex flex-row justify-between'>
                <Text>{ request.patientName }</Text>
                <Text>{ request.patientType }</Text>
            </View>
            <View className='w-full h-px bg-black my-2'></View>
            <View>
                <View>
                    <Text>{ request.description }</Text>
                    <View className='flex flex-row items-center'>
                        <Iconify icon="mdi:map-marker"></Iconify>
                        <Text>{ request.location }</Text>
                    </View>
                </View>
                <Text className='font-semibold'>requesterName: <Text className='font-normal'>{ request.requesterName }</Text></Text>
                <Text className='font-semibold'>requesterPhone: <Text className='font-normal'>{ request.requesterPhone }</Text></Text>
                <Text className='font-semibold'>qtdBloodBags: <Text className='font-normal'>{ request.qtdBloodBags }</Text></Text>
            </View>
            <View className='flex flex-row items-center w-full justify-end'>
                <TouchableOpacity className='flex flex-row items-center'>
                <Text>{ request.date }</Text>
                {
                    clicked?
                    <Iconify icon="ic:twotone-arrow-drop-up"></Iconify>
                    :
                    <Iconify icon="ic:twotone-arrow-drop-down"></Iconify>
                }
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RequestCard;