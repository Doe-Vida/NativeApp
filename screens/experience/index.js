import { ScrollView, View } from "react-native";
import FormGenerator from "../../assets/components/formGenerator";
import useSession from "../../assets/services/apiToken";
import { useEffect, useState } from "react";
import apiDoeVida from "../../assets/services/apiDoeVida";
import { Alert } from "react-native";

function ExperienceScreen() {
    const { user, token } = useSession()
    const [dados, setDados] = useState({
        title: '',
        content: '',
        user_id: ''
    })
    useEffect(() => {
        setDados({ ...dados, ['user_id']: user.id })
    }, [user])
    const enviar = () => {
        apiDoeVida.post('/posts', dados, {
            headers: {
                Authorization: "Bearer " + token.access_token
            }
        })
            .then(res => {
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
    }
    return (
        <ScrollView>

            <View className='py-2'>
                <FormGenerator dados={dados} setDados={setDados}
                    info={[
                        { name: "title", placeholder: "Titulo", req: true },
                        {
                            name: "content",
                            placeholder: "Escreva sobre sua experiência de doação para encorajar outras pessoas",
                            customClass: "p-2 h-52 px-8 w-full rounded-3xl border border-gray-330",
                            multiline: true,
                            req: true
                        },
                    ]}
                    submitAction={() => enviar()}
                    buttonName={"Enviar"}
                />
            </View>
        </ScrollView>
    );
}

export default ExperienceScreen;