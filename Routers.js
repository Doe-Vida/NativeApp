import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions, NavigationContainer, TabRouter } from '@react-navigation/native';
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
import EditProfileScreen from './screens/navbar/editProfile';
import OrientationLocker from 'react-native-orientation-locker';

const Nav = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function NavBar({ navigation, route }) {
    var ActiveTintColor = '#F50057';
    var InactiveTintColor = '#d9d9d9';
    const MyTabRouter = options => {
        const router = TabRouter(options)
        return {
            ...router,
            getStateForAction(state, action, options) {
                switch (action.type) {
                    case 'CLEAR_HISTORY':
                        return {
                            ...state,
                            routeKeyHistory: [],
                        };
                    default:
                        return router.getStateForAction(state, action, options);
                }
            },
            actionCreators: {
                ...router.actionCreators,
                clearHistory() {
                    return { type: 'CLEAR_HISTORY' };
                },
            },
        };
    };
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
        <View className="absolute w-screen flex items-center justify-center">
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
    const CustomHomeMiddle = ({ children, onPress }) =>
        <View className="absolute w-screen flex items-center justify-center">
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    height: 70,
                    zIndex:10,
                }}
                onPress={onPress}
            >
                    {children}
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
    const resetTotal = () => {
        // console.log('reseted');
        // CommonActions.reset({
        //     routeNames: ["Home","Solicitacoes", "Maps", "Regras", "Experiencias", "BloodTypes"]
        // })
        // console.log(navigation.getState())
    }
    resetTotal()
    return (
        <Nav.Navigator

            screenListeners={({ navigation, route }) => ({
                tabPress: (e) => {
                    console.log('tabPress: ', e.target);
                },
                state: (e) => {
                    // Do something with the state
                    console.log('state changed: ', e.data);
                    console.log(route.key);
                    // Do something with the `navigation` object
                    if (!navigation.canGoBack()) {
                        console.log("we're on the initial screen");
                    }
                },
                focus: (e) => {
                    console.log('focus: ', e.type);
                }
            })}
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
                    tabBarButton: (props) =>
                    <CustomHomeMiddle {...props} />
                    // ,
                }}
            />
            <Stack.Screen
                name='Solicitacoes'
                component={RequestsScreen}
                options={{
                    contentStyle: {},
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#fff"
                        />
                    ),
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
                        <View className="flex flex-col items-center mr-8">
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
                        <View className="flex flex-col items-center ml-8">
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
                        tabBarStyle: { display: 'none' },
                        headerShown: true,
                        headerTintColor: "#fff",
                        headerLeft: ()=><Button onPress={()=>navigation.navigate("Solicitacoes")} title='<'></Button>,
                        headerStyle:
                        {
                            backgroundColor: ActiveTintColor,
                        },
                        tabBarButton: (props) =>
                        // <CustomTabBarButtonCircularButton {...props} />
                        { },

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
                <Stack.Screen options={{ headerShown: false }} name='InitialPage' component={InitialPage} />
                <Nav.Screen
                    options={{ headerShown: false }}
                    name='NavBar' component={NavBar} />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfileScreen}
                    options={
                        {
                            tabBarStyle: { display: 'none' },
                            headerShown: true,
                            headerTintColor: "#fff",
                        }}
                />
                <Stack.Screen name="test" component={TestPage} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        //   <Login/>
    );
}

export default (Routers)
