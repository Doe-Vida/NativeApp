import React from 'react';
import { View } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './screens/login';
import HomeScreen from './screens/navbar/home';
import BloodDonationsScreen from './screens/navbar/bloodDonation';
import InitialPage from './screens/initialPage';
import SignUpScreen from './screens/signup';

const Nav = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NavBar() {
    return (
        <Nav.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopColor: 'transparent',
                    paddingVertical: 1,
                },
                tabBarActiveTintColor: '#0ff000',
                tabBarInactiveTintColor: '#d9d9d9'
            }}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="home" size={size} color={color} />
                    )
                }}
            />
            <Stack.Screen
                name='BloodDonations'
                component={BloodDonationsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="home" size={size} color={color} />
                    )
                }}
            />
        </Nav.Navigator>
    )
}

function Routers() {



    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{headerShown:false}} name='InitialPage' component={InitialPage} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Nav.Screen name='NavBar' component={NavBar} />
            </Stack.Navigator>
        </NavigationContainer>
        //   <Login/>
    );
}

export default (Routers)
