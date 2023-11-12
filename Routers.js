import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './screens/login';
import HomeScreen from './screens/navbar/home';
import InitialPage from './screens/initialPage';
import SignUpScreen from './screens/signUp';
import RequestsScreen from './screens/navbar/requests';
import MapsScreen from './screens/navbar/maps';
import RulesScreen from './screens/navbar/rules';
import ExperiencesScreen from './screens/navbar/experiences';
import TestPage from './screens/test';
import BloodTypesScreen from './screens/navbar/bloodTypes';
import { Iconify } from 'react-native-iconify';

const Nav = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NavBar() {
    var ActiveTintColor = '#F50057';
    var InactiveTintColor = '#d9d9d9';
    const colorActiveText = (focused) => {
        return { color: focused ? ActiveTintColor : InactiveTintColor }
    }
    const colorActiveBackground = (focused) => {
        return {}
    }
    const styles = StyleSheet.create({
        shadow: {
            shadowColor: '#7F5DF0',
            shadowOffset: {
                width: 0,
                height: 10
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5
        }
    })

    const CustomTabBarIcon = ({ focused, size, color, name, iconName }) =>
        <View className="flex flex-col items-center">
            <View
                style={{
                    backgroundColor: focused ? "#FFCBCB" : ""
                }}
                className='w-14 py-[2] rounded-full flex justify-center items-center'>

                <Ionicons name={iconName} size={size} color={color} />
            </View>
            <Text className="text-xs"
                style={colorActiveText(focused)}>{Maps}</Text>
        </View>

    const CustomTabBarButtonCircularButton = ({ children, onPress }) =>
        <View>
            <TouchableOpacity
                style={{
                    top: -30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: 36,
                    backgroundColor: '#ffffff',
                    ...styles.shadow
                }}
                onPress={onPress}
            >
                <View style={{


                }}>
                    {children}
                </View>
            </TouchableOpacity>
        </View>

    const CustomTabBarButton = ({ children, onPress, name }) =>
        <View>
            <TouchableOpacity
                style={{
                    // top: -30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                    // borderRadius: 36,
                    // backgroundColor: '#ffffff',
                    ...styles.shadow
                }}
                onPress={onPress}
            >
                <View style={{


                }}>
                    {children}
                    <Text></Text>
                </View>
            </TouchableOpacity>
        </View>

    return (
        <Nav.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,

                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopColor: 'transparent',
                    paddingVertical: 1,
                    height: 70,
                    // shadowOffset: {
                    //     width: -12,
                    //     height: -12,
                    // },
                    // shadowOpacity: 0.58,
                    // shadowRadius: 16.0,
                    // elevation: 24,
                    // borderTopLeftRadius: 21,
                    // borderTopRightRadius: 21,
                    // backgroundColor: '#fff',
                },
                tabBarActiveTintColor: ActiveTintColor,
                tabBarInactiveTintColor: InactiveTintColor,


            }}
        >
            <Stack.Screen
                name='Solicitacoes'
                component={RequestsScreen}
                options={{
                    contentStyle: {},
                    headerShown: true,
                    headerTintColor: "#fff",
                        headerStyle:
                        {
                            backgroundColor: ActiveTintColor
                        },
                    tabBarIcon: ({ focused, size, color }) => (
                        <View className="flex flex-col items-center">
                            <View
                                style={{
                                    backgroundColor: focused ? "#FFCBCB" : ""
                                }}
                                className='w-14 py-[2] rounded-full flex justify-center items-center'>
                                <Iconify icon='mdi:cards-heart' size={size} color={color} />
                            </View>
                            <Text className="text-xs"
                                style={colorActiveText(focused)}>Solicitações</Text>
                        </View>
                    )
                }}
            />
            <Stack.Screen
                name='Maps'
                component={MapsScreen}
                options={{
                    headerShown: true,
                    headerTintColor: "#fff",
                        headerStyle:
                        {
                            backgroundColor: ActiveTintColor
                        },
                    tabBarIcon: ({ focused, size, color }) => (
                        <View className="flex flex-col items-center">
                            <View
                                style={{
                                    backgroundColor: focused ? "#FFCBCB" : ""
                                }}
                                className='w-14 py-[2] rounded-full flex justify-center items-center'>
                                <Iconify icon='mdi:map-marker' size={size} color={color} />
                            </View>
                            <Text className="text-xs"
                                style={colorActiveText(focused)}>Maps</Text>
                        </View>
                    )
                }}
            />
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <View className="flex flex-col items-center">
                            <View
                                style={{
                                    backgroundColor: focused ? "#FFCBCB" : ""
                                }}
                                className='w-14 py-[2] rounded-full flex justify-center items-center'>
                                <Iconify icon='ic:round-home' size={size} color={color} />
                            </View>
                            <Text className="text-xs"
                                style={colorActiveText(focused)}>Home</Text>
                        </View>

                    ),
                    // tabBarButton: (props) =>
                        // <CustomTabBarButtonCircularButton {...props} />
                    // ,
                }}
            />
            <Stack.Screen
                name='Regras'
                component={RulesScreen}
                options={{
                    headerShown: true,
                    headerTintColor: "#fff",
                        headerStyle:
                        {
                            backgroundColor: ActiveTintColor
                        },
                    tabBarIcon: ({ focused, size, color }) => (
                        <View className="flex flex-col items-center">
                            <View
                                style={{
                                    backgroundColor: focused ? "#FFCBCB" : ""
                                }}
                                className='w-14 py-[2] rounded-full flex justify-center items-center'>
                                <Iconify icon='mdi:file-document-box-multiple' size={size} color={color} />
                            </View>
                            <Text className="text-xs"
                                style={colorActiveText(focused)}>Regras</Text>
                        </View>
                    )
                }}
            />
            <Stack.Screen
                name='Experiencias'
                component={ExperiencesScreen}
                options={{
                    headerShown: true,
                    headerTintColor: "#fff",
                    
                        headerStyle:
                        {
                            backgroundColor: ActiveTintColor
                        },
                    tabBarIcon: ({ focused, size, color }) => (
                        <View className="flex flex-col items-center">
                            <View
                                style={{
                                    backgroundColor: focused ? "#FFCBCB" : ""
                                }}
                                className='w-14 py-[2] rounded-full flex justify-center items-center'>
                                <Iconify icon='ic:sharp-verified' size={size} color={color} />
                            </View>
                            <Text className="text-xs"
                                style={colorActiveText(focused)}>Experiencias</Text>
                        </View>
                    )
                }}
            />
            <Stack.Screen
                name="BloodTypes"
                component={BloodTypesScreen}
                options={
                    {
                        tabBarVisible: false,
                        headerShown: true,
                        headerTintColor: "#fff",
                        headerStyle:
                        {
                            backgroundColor: ActiveTintColor,
                        },
                        tabBarButton: (props) =>
                        // <CustomTabBarButtonCircularButton {...props} />
                        { }
                        ,

                    }}
            />
        </Nav.Navigator>
    )
}

const op = {}

function Routers() {



    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Nav.Screen options={{ headerShown: false }} name='NavBar' component={NavBar} />
                <Stack.Screen options={{ headerShown: false }} name='InitialPage' component={InitialPage} />
                <Stack.Screen name="test" component={TestPage} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        //   <Login/>
    );
}

export default (Routers)
