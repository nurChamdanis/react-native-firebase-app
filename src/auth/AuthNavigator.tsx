// AuthNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth'; // Your login screen component

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} /> 
        </Stack.Navigator>
    );
};

export default AuthNavigator;
