import { View, Text } from "react-native";

function RulesCard({ title, rules = [""] }) {
    return (
        <View className='w-full bg-white rounded-lg p-2 border border-gray-300'>
            <Text className='font-semibold flex flex-col text-xl'>
                {title}
            </Text>
            <View className='h-px my-2 bg-black'></View>
            <View className='gap-2'>
                {rules.map(rule =>
                    <View className='flex flex-row w-full'>
                        <View className='absolute h-1 w-1 ml-1 mt-3 rounded-full bg-black'></View>
                        <Text className='w-full pl-5 pr-2'>{rule}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

export default RulesCard;

/**
 * 
 * {
    "data": {
        "birthdate": null,
        "blood_type": "A+",
        "city": null,
        "comments": "[]",
        "date_last_donation": null,
        "donations_orders": "[6, 7, 9, 10, 11, 12]",
        "first_name": null,
        "id": "66",
        "last_name": null,
        "password": "$2b$12$sbyHV4QKK4c8EbYWsjNPBe8ABsON8Ivyc6Ijb4Qi2DzWpn5MaJ7SO",
        "password_reset_token": null,
        "phone": null,
        "photo": null,
        "posts": "[]",
        "qty_donations": null,
        "sex": false,
        "state": null,
        "username": "usuariobemreal2@gmail.com"
    },
    "errors": null,
    "message": "Desired action executed",
    "success": true
}

{
    "data": {
        "birthdate": null,
        "blood_type": "A+",
        "city": null,
        "comments": "[]",
        "date_last_donation": null,
        "donations_orders": "[]",
        "first_name": null,
        "id": "68",
        "last_name": null,
        "password": "$2b$12$mlE7FiZOpJVv6e6waC8mVOHihvYBHelU/1594K3eMKm.R.Z.WNRXu",
        "password_reset_token": null,
        "phone": null,
        "photo": null,
        "posts": "[]",
        "qty_donations": null,
        "sex": false,
        "state": null,
        "username": "Logado@mail.com"
    },
    "errors": null,
    "message": "Desired action executed",
    "success": true
}
 * 
 */