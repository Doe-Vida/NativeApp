import { ScrollView, Text, View } from "react-native";
import RulesCard from "../../../assets/components/cards/rulesCard";

function RulesScreen() {
    return (
        <View className='flex items-center justify-center w-full'>
            <ScrollView className='w-11/12'>
                <View className='w-full flex items-center'>
                    <View className='flex items-center mt-2 w-11/12 '>
                        <View className='mb-2'>
                            <RulesCard title={"Requisitos básicos"} rules={
                                [
                                    "Estar em boas condições de saúde;",
                                    "Pesar no mínimo 50kg;",
                                    "Estar descansado (ter dormido pelo menos 6 horas nas últimas 24 horas);",
                                    "Apresentar documento original com foto;",
                                    "Estar alimentado (evitar alimentação gordurosa nas 4 horas que antecedem a doação);",
                                ]
                            } />
                        </View>
                        <View className='mb-2'>
                            <RulesCard title={"Pricipais impedimentos temporários"} rules={
                                [
                                    'Gripe, resfriado e febre: aguardar 7 dias após o desaparecimento dos sintomas;',
                                    'Período gestacional;',
                                    'Ingestão de bebida alcoólica nas 12 horas que antecedem a doação;',
                                    'Tatuagem e/ou piercing nos últimos 12 meses (piercing em cavidade oral ou região genital impedem a doação);',
                                    'Extração dentária: 72 horas;',
                                    'Vacinação: o tempo de impedimento varia de acordo com o tipo de vacina;',
                                    'Ter sido exposto a situações de risco acrescido para infecções sexualmente transmissíveis (aguardar 12 meses após a exposição). ',]
                            } />
                        </View>
                        <View className='mb-2'>
                            <RulesCard title={"Pricipais impedimentos definitivos"} rules={
                                [

                                    "Ter passado por um quadro de hepatite após os 11 anos de idade;",
                                    "Evidência clínica ou laboratorial das seguintes doenças transmissíveis pelo sangue:  Hepatites B e C, AIDS (vírus HIV), doenças associadas aos vírus HTLV I e II e Doença de Chagas;",
                                    "Uso de drogas ilícitas injetáveis;",
                                    "Malária."
                                ]
                            } />
                        </View>
                        <View className='mb-2'>
                            <RulesCard title={"Cuidados pós-doação de sangue"} rules={
                                [
                                    "Evite esforços físicos exagerados por 12 horas;",
                                    "Aumente a ingestão de líquidos (água);",
                                    "Não fume por 2 horas;",
                                    "Evite bebidas alcoólicas por 12 horas;",
                                    "Mantenha o curativo no local da punção por 4 horas;",
                                    "Não dirija veículos de grande porte, não trabalhe em andaimes e não pratique paraquedismo ou mergulho;",
                                    " Faça um pequeno lanche e hidrate-se.",
                                ]
                            } />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default RulesScreen;