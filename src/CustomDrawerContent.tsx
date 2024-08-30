import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <Image source={require('assets/LOGOSMKDW.png')} style={styles.icon} />
                <TouchableOpacity
                    style={styles.accountButton}
                    onPress={() => {
                        console.log('Account icon pressed');
                    }}
                >
                    <Text style={styles.iconText}>Account</Text>
                </TouchableOpacity>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    accountButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    icon: {
        width: 100,
        height: 100,
        paddingLeft: 20,
        marginLeft: 20
    },
    iconText: {
        fontSize: 16,
    },
});

export default CustomDrawerContent;
