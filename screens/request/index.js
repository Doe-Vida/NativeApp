import { View, Text, Alert, ScrollView } from "react-native";
import FormGenerator from "../../assets/components/formGenerator";
import { useEffect, useState } from "react";
import useSession from "../../assets/services/apiToken";
import apiDoeVida from "../../assets/services/apiDoeVida";

function RequestScreen({ navigation }) {
    const { user, token } = useSession();
    const [hospitals, setHospitals] = useState([{ label: "", value: "" }])

    const bloodTypes = [
        // { label: 'nullify', value: null },
        { label: 'A+', value: 'A+' },
        { label: 'A-', value: 'A-' },
        { label: 'B+', value: 'B+' },
        { label: 'B-', value: 'B-' },
        { label: 'AB+', value: 'AB+' },
        { label: 'AB-', value: 'AB-' },
        { label: 'O+', value: 'O+' },
        { label: 'O-', value: 'O-' },
    ];

    const hospital = {
        "city_name": "Baltimore",
        "donations_orders": 2,
        "donations_orders_cancelled": null,
        "donations_orders_done": null,
        "hospital_name": "John Hopkins Hospital",
        "id": "2",
        "latitude": null,
        "longitude": null,
        "state": 1
    }

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
    const [dados, setDados] = useState({
        "patient_name": "",
        "blood_type": "",
        "description": "",
        "qty_bags": "",
        "hospital": "",
        "requester": user.id,
        "state": 1
    })

    const getHospitals = () => {
        console.log("loading...");
        console.log(user.id);
        apiDoeVida.get('/hospitals')
            .then((res) => {
                let hospitalsNames = res.data['data'].map(item => ({
                    label: item.hospital_name,
                    value: item.hospital_name,
                }));
                setHospitals(hospitalsNames)
            })
    }


    const enviar = () => {
        apiDoeVida.post('/donations_orders', dados, {
            headers: {
                Authorization: "Bearer " + token.access_token
            }
        })
            .then((res) => {
                Alert.alert(
                    'Sucesso!',
                    'Solicitação criada com sucesso',
                    [
                        {
                            text: 'Ok',
                            onPress: () => { },
                            style: 'ok',
                        },
                    ],
                    {
                        cancelable: true,
                    },
                )
                console.log(res.data);
            })
            .catch((res) => console.log(JSON.stringify(res.response)))
    }
    useEffect(() => {
        getHospitals()
    }, [])
    useEffect(() => {
        setDados({ ...dados, ['requester']: user.id })
    }, [user])

    return (
        <ScrollView>
            <View className='pb-2'>
                <Text className='rounded'></Text>
                <FormGenerator dados={dados} setDados={setDados}
                    info={[
                        { name: "patient_name", placeholder: "Nome do Paciente", req: true },
                        { name: "blood_type", placeholder: "Tipo Sanguíneo", data: bloodTypes, req: true },
                        { name: "hospital", placeholder: "Hospital", data: hospitals, search: true, req: true },
                        { name: "qty_bags", type: 'numeric', placeholder: "Quantidade de bolsas de Sangue", req: true },
                        {
                            name: "description",
                            placeholder: "Escreva sobre o motivo ou sobre a pessoa que esta precisando da doação... (opcional)",
                            customClass: "p-2 h-52 px-8 w-full rounded-3xl border border-gray-330",
                            multiline: true
                        },
                    ]}
                    submitAction={() => enviar()}
                    buttonName={"Enviar"}
                />
            </View>
        </ScrollView>
    );
}

export default RequestScreen;