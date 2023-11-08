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

const Nav = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NavBar() {
    var ActiveTintColor = '#0ff000';
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
    
    const CustomTabBarButton = ({ children, onPress }) =>
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
                tabBarActiveTintColor: '#0ff000',
                tabBarInactiveTintColor: '#d9d9d9',


            }}
        >
            <Stack.Screen
                name='Solicitacoes'
                component={RequestsScreen}
                options={{
                    contentStyle: {},
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <View className="flex flex-col items-center">

                            <Ionicons name="heart" size={size} color={color} />
                            <Text className="text-xs"
                            style={colorActiveText(focused)}>Solicitacoes</Text>
                        </View>
                    )
                }}
            />
            <Stack.Screen
                name='Maps'
                component={MapsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <View className="flex flex-col items-center">
                            <Ionicons name="map" size={size} color={color} />
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
                        <View className="">
                            <Ionicons name="home-sharp" size={size} color={color} />
                        </View>

                    ),
                    tabBarButton: (props) =>
                        <CustomTabBarButton {...props} />
                    ,
                }}
            />
            <Stack.Screen
                name='Regras'
                component={RulesScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <View className="flex flex-col items-center">

                            <Ionicons name="list" size={size} color={color} />
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
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <View className="flex flex-col items-center">

                            <Ionicons name="checkmark-circle" size={size} color={color} />
                            <Text className="text-xs"
                            style={colorActiveText(focused)}>Experiencias</Text>
                        </View>
                    )
                }}
            />
        </Nav.Navigator>
    )
}

function Routers() {



    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="test" component={TestPage} />
                <Stack.Screen options={{ headerShown: false }} name='InitialPage' component={InitialPage} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Nav.Screen options={{ headerShown: false }}  name='NavBar' component={NavBar} />
            </Stack.Navigator>
        </NavigationContainer>
        //   <Login/>
    );
}

export default (Routers)
