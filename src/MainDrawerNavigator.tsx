import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/dashboard';
import SettingsScreen from './screens/SettingsScreen';
import { ScreenNames } from '@types';
import CustomDrawerContent from './CustomDrawerContent';
import { Text } from 'react-native-reanimated/lib/typescript/Animated';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name={ScreenNames.DASHBOARD} component={DashboardScreen}  
                options={({ navigation }) => ({
                    headerTitle: 'Dashboard' 
                })}
            /> 
            <Drawer.Screen name={ScreenNames.SETTINGS} component={SettingsScreen} />
        </Drawer.Navigator>
    );
};

export default MainDrawerNavigator;
