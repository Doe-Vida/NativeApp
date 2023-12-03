import { ScrollView, View } from "react-native";
import RequestCard from "./cards/requestCard";
import useSession from "../services/apiToken";
import { useEffect, useState } from "react";
import apiDoeVida from "../services/apiDoeVida";

function GetRequests({ bloodType }) {
    const single_request = {
        "blood_type": "2",
        "city_name": null,
        "date_donation_order": "Wed, 06 Sep 2023 00:13:38 GMT",
        "description": "Patient is in need of blood.",
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
        "id": "1",
        "patient_name": "John Doe",
        "qty_bags": 2,
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
    const { token } = useSession()
    const [requests, setRequests] = useState([single_request])
    useEffect(() => {
        apiDoeVida.get('/donations_orders', {
            headers: {
                Authorization: "Bearer " + token.access_token
            }
        })
            .then((res) => {
                console.log(res.data['data']);
                setRequests(res.data['data'])
            })
    }, [bloodType])
    return (

        <ScrollView className='w-full -mr-8'>

            {requests.map((request) =>
                <View className='my-2'>
                    <RequestCard key={request.id} request={request} />
                </View>
            )}
        </ScrollView>
    );
}

export default GetRequests;