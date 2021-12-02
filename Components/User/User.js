import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { FontAwesome, FontAwesome5, MaterialIcons, Ionicons, Feather, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from '../Profile/Profile';

import { auth, db } from '../Firebase/Config';
import { onAuthStateChanged } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, addDoc, setDoc } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";




const Drawer = createDrawerNavigator();


function User() {

     
    function Archive() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Archive screen</Text>
            </View>
        );
    }

    function Activity() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Activity Screen</Text>
            </View>
        );
    }

    function Qrcode() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Qrcode Screen</Text>
            </View>
        );
    }

    function Saved() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Saved Screen</Text>
            </View>
        );
    }

    function CloseFriend() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Close Friend Screen</Text>
            </View>
        );
    }

    function UpdateMessagig() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Update Messagi Screen</Text>
            </View>
        );
    }



    return (
        <Drawer.Navigator initialRouteName="Feed"


        >

            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Muhammad Tayyab',
                    drawerLabel: 'Settings',
                    drawerIcon: () => <AntDesign name="setting" size={24} color="black" />
                }}

            />
            <Drawer.Screen
                name= "Archive"
                component={Archive}
                

                options={{
                    drawerLabel: 'Archive',
                    drawerIcon: () => <Entypo name="back-in-time" size={24} color="black" />
                }}
            />

            <Drawer.Screen
                name="Activity"
                component={Activity}
                options={{
                    drawerLabel: 'Activity',
                    drawerIcon: () => <MaterialCommunityIcons name="progress-clock" size={24} color="black" />
                }}
            />

            <Drawer.Screen
                name="Qrcode"
                component={Qrcode}
                options={{

                    drawerLabel: 'Qrcode',
                    drawerIcon: () => <FontAwesome name="qrcode" size={24} color="black" />
                }}
            />

            <Drawer.Screen
                name="Saved"
                component={Saved}
                options={{
                    
                    drawerLabel: 'Saved',
                    drawerIcon: () => <FontAwesome  name="bookmark-o" size={24} color="black" />
                }}
            />

            <Drawer.Screen
                name="CloseFriend"
                component={CloseFriend}
                
                options={{
                    drawerLabel: 'CloseFriend',
                    drawerIcon: () => <FontAwesome5 name="list-ul" size={24} color="black" />
                }}
            />

            <Drawer.Screen
                name="UpdateMessagig"
                component={UpdateMessagig}
                options={{
                    drawerLabel: 'UpdateMessagig',
                    drawerIcon: () => <AntDesign name="message1" size={24} color="black" />
                }}
            />

        </Drawer.Navigator >
    )
}

export default User




// function MyDrawer() {
//     return (

//   );
// }