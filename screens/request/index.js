import { View, Text, Alert } from "react-native";
import FormGenerator from "../../assets/components/formGenerator";
import { useState } from "react";
import useSession from "../../assets/services/apiToken";
import apiDoeVida from "../../assets/services/apiDoeVida";

function RequestScreen({ navigation }) {
    const { user, token } = useSession();

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
        blood_type: 2,
        city_name: '',
        description: '',
        patient_name: '',
        qty_bags: '',
        requester: user.id,
        hospital: '',
        state: 1
    })
    

    const enviar = () =>{
        apiDoeVida.post('/donations_orders', dados, {
            headers:{
                Authorization: "Bearer " + token.access_token
            }
        })
        .then((res)=>{Alert.alert(
            'Sucesso!',
            'Solicitação criada com sucesso',
            [
                {
                    text: 'Ok',
                    onPress: () => {},
                    style: 'ok',
                },
            ],
            {
                cancelable: true,
            },
        )
    console.log(res.data);
    })
        .catch((res)=>console.log(JSON.stringify(res.response)))
    }

    return ( 
        <View>
            <Text className='rounded'></Text>
            <FormGenerator dados={dados} setDados={setDados}
            info={[
                { name: "patient_name", placeholder: "Nome do Paciente" },
                { name: "blood_type", placeholder: "Tipo Sanguíneo", data: bloodTypes },
                { name: "city_name", placeholder: "Cidade" },
                { name: "hospital", placeholder: "Hospital" },
                { name: "qty_bags", placeholder: "Quantidade de bolsas de Sangue" },
                { name: "description", 
                    placeholder: "Escreva sobre o motivo ou sobre a pessoa que esta precisando da doação... (opcional)",
                    customClass: "p-2 h-52 px-8 w-full rounded-3xl border border-gray-330",
                    multiline: true
                },
            ]}
            submitAction={()=>enviar()}
            buttonName={"Enviar"}
            />
        </View>
     );
}

export default RequestScreen;