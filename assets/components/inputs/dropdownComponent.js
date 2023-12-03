import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
//   import AntDesign from '@expo/vector-icons/AntDesign';



const DropdownComponent = ({title, value, data, onChangeText, placeholder, search}) => {
    // const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: "#F50057" }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {/* {renderLabel()} */}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "#F50057" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search={search}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={placeholder}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    onChangeText(item.value)
                    setIsFocus(false);
                }}
            //   renderLeftIcon={() => (
            //     <AntDesign
            //       style={styles.icon}
            //       color={isFocus ? "#F50057" : 'black'}
            //       name="Safety"
            //       size={20}
            //     />
            //   )}
            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        
    },
    dropdown: {
        height: 50,
        borderColor: '#BAB9BD',
        borderWidth: 0.5,
        borderRadius: 100,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: "#F3F3F5",
        left: 28,
        top:-11,
        zIndex: 999,
        paddingHorizontal: 2,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
        paddingLeft:23,
        color:"rgb(165, 165, 165)",
    },
    selectedTextStyle: {
        fontSize: 14,
        paddingLeft:23,
        // color:"rgb(165, 165, 165)",
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});