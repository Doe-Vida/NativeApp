import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomInput from "./customInput";
import DropdownComponent from "./dropdownComponent";
import DatePicker from 'react-native-modern-datepicker';

function InputGenerator({ dados, setDados, info, errors, setErrors }, ref) {
    const transform = (par) => {
        return (par.charAt(0).toUpperCase() + par.slice(1)).replace(/_/g, " ")
    }

    useImperativeHandle(ref, () => ({
        validate() {
            var error = {}
            info.map((item) => {
                // msg =
                // console.log(`item: ${item.name}, erro: ${errors[item.name]}, msg: ${msg}`);
                error[item.name] = validators(item, dados[item.name])
            })
            setErrors(error)
            return error
        }
    }));
    const validators = (field, value) => {
        let name = transform(field.name)
        if (field?.req && value.toString() == "") {
            return name + " is required";
        }
        if (field?.min != null && value.toString().length < field.min || field?.max != null && value.toString().length > field.max) {
            if (field.max == field.min) {
                return name + " must contain " + field.max + " letters";
            }
            else if (field.max != null) {
                return name + " can't contain more than " + field.max + " letters";
            }
            else if (field.min != null && field.max == null) {
                return name + " must contain at least " + field.min + " letters";
            }
            else {
                return name + " must be between " + field.min + " and " + field.max;
            }
        }
        var msg = undefined
        if (field?.specificValidator != null) {
            msg = field.specificValidator(value)?.valueOf();
            // if (msg != undefined || msg != "") {
            //     return msg
            // }
        }
        return msg
    }

    const InputSelector = (item) => {
        if (item.data) {

        }
    }
    useEffect(() => {
        console.log('u');
        console.log(dados);
    }, [dados])
    const [clone, setClone] = useState({

    })
    useEffect(() => {
        console.log('u');
        console.log(clone);
    }, [clone])


    return (
        <View className="w-[100%] ">
            {info.map((item) => item.type == 'date' ?
                <View className='absolute h-screen w-screen flex items-center justify-center -top-14 -left-8'
                    style={
                        { display: dados[item.name + "_show"] ? 'flex' : 'none' }
                    }
                >
                    <TouchableOpacity onPressIn={() => setDados({ ...dados, [item.name + "_show"]: false })}
                        className='absolute bg-[#0000008e] z-40 h-screen w-screen flex items-center justify-center'>
                    </TouchableOpacity>
                    <View className='w-full z-50 flex items-center justify-center'>
                        <View className='p-3 rounded mb-2 bg-white '>
                            <Text>{item.placeholder}</Text>
                        </View>
                        <View className='w-11/12'>
                            <DatePicker
                                onDateChange={date => { setClone({ ...clone, [item.name]: date }) }}
                                // onSelectedChange={} 
                                mode="calendar"
                                className='rounded' />
                        </View>
                        <View className='w-11/12 flex items-end '>
                            <TouchableOpacity onPress={() => { setDados({ ...dados, [item.name]: clone[item.name], [item.name + "_show"]: false }) }} className='p-5 rounded mt-2 bg-white'>
                                <Text>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                : <View></View>
            )}
            {info.map((item) =>
                <View key={item.name} className='pb-3 relative'>
                    {item.data ?
                        <DropdownComponent
                            title={item.name}
                            value={dados[item.name]}
                            data={item.data}
                            onChangeText={(e) => { setErrors({ ...errors, [item.name]: validators(item, e) }); setDados({ ...dados, [item.name]: e }) }}
                            placeholder={item.placeholder != undefined ? item.placeholder : item.name}
                            search={item.search}
                        />
                        :
                        (
                            item.type == 'date' ?
                                <View>
                                    <TouchableOpacity
                                        className='border border-gray-330 pl-7 p-3 rounded-full'
                                        onPress={() => { setDados({ ...dados, [item.name + "_show"]: true }) }}>
                                        {
                                            dados[item.name]?
                                            <Text className=' ml-5'>{dados[item.name]}</Text>
                                            :
                                            <Text className='text-gray-400 ml-5'>{item.placeholder}</Text>

                                        }
                                    </TouchableOpacity>
                                </View>
                                :
                                <CustomInput
                                    /*
                                        TROCAR AUTOMATICAMENTE ICON LEFT AND RIGHT COM BASE NO TIPO
                                    */
                                    // key={item.name}
                                    title={item.name}
                                    value={dados[item.name]}
                                    placeholder={item.placeholder != undefined ? item.placeholder : item.name}
                                    isPassword={item.isPassword}
                                    iconLeft={item.iconLeft}
                                    iconRight={item.iconRight}
                                    type={item.type}
                                    customClass={item.customClass}
                                    max={item.max}
                                    multiline={item.multiline}
                                    onChangeText={(e) => { setErrors({ ...errors, [item.name]: validators(item, e) }); setDados({ ...dados, [item.name]: e }) }}
                                ></CustomInput>
                        )
                    }
                    <View className={errors[item.name] == undefined ? "hidden" : `block`}>
                        <Text className="text-red-400">
                            *{errors[item.name]}
                        </Text>
                    </View>
                    {item.description}
                </View>
            )}
        </View>
    );
}

export default forwardRef(InputGenerator);