import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Iconify } from "react-native-iconify";

// const req = {
//     patientName: "Loading...",
//     patientType: "A+",
//     description: "some description goes here",
//     location: "Idk how it will be",
//     requesterName: "Loading...",
//     requesterPhone: "Loaging",
//     qtdBloodBags: "0",
//     date: "00/00/0000",
// }
const single_request = {
    "blood_type": "2",
    "city_name": null,
    "date_donation_order": "Wed, 06 Sep 2023 00:13:38 GMT",
    "description": "Patient is in need of blood.",
    "id": "1",
    "patient_name": "John Doe",
    "qty_bags": 2,
    "hospital": {
        "city_name": "Baltimore",
        "donations_orders": 2,
        "donations_orders_cancelled": null,
        "donations_orders_done": null,
        "hospital_name": "John Hopkins Hospital",
        "id": "2",
        "latitude": null,
        "longitude": null,
        "state": 1
    },
    "requester": {
        "birthdate": "10/01/1987",
        "blood_type": "A+",
        "city": "Campinas",
        "comments": "[]",
        "date_last_donation": null,
        "donations_orders": "[1]",
        "first_name": "Lauren",
        "id": "1",
        "last_name": "Hawkins",
        "password": "$2b$12$XfgPybL1tTh4PquqlyDRg.NGF0vtB7pjpPPkXpc.RIJIYjuYE13Qa",
        "password_reset_token": null,
        "phone": "19914598",
        "photo": null,
        "posts": "[]",
        "qty_donations": null,
        "sex": false,
        "state": null,
        "username": "sierra98@example.com"
    },
    "status": "open"
}

function RequestCard({ request = single_request }) {
    const [clicked, setClicked] = useState(false)
    const formatDate = (string) =>{
        let date = new Date(string)
        
        return date.toLocaleString()
    }
    return (
        <View className='w-[90%] border border-gray-330 drop-shadow-md rounded-lg p-4 bg-white'>
            <View className='flex flex-row justify-between'>
                <Text>{request.patient_name}</Text>
                <Text>{request.blood_type}</Text>
            </View>
            <View className=' h-px bg-black my-2'></View>
            <View>
                <View>
                    <Text>{request.description}</Text>
                    <View className='flex flex-row items-center'>
                        <Iconify icon="mdi:map-marker"></Iconify>
                        <View className='flex'>
                            <Text>{request.hospital.city_name}</Text>
                            <Text>{request.hospital.hospital_name}</Text>
                        </View>
                    </View>
                </View>
                <Text className='font-semibold'>requesterName: <Text className='font-normal'>{request.requester.first_name}</Text></Text>
                <Text className='font-semibold'>requesterPhone: <Text className='font-normal'>{request.requester.phone}</Text></Text>
                <Text className='font-semibold'>qtdBloodBags: <Text className='font-normal'>{request.qty_bags}</Text></Text>
            </View>
            <View className='flex flex-row items-center w-full justify-end'>
                <TouchableOpacity onPress={() => setClicked(!clicked)} className='flex flex-row items-center'>
                    <Text>{formatDate(request.date_donation_order)}</Text>
                    {
                        clicked ?
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