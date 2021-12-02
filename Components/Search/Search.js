import React from 'react'
import { StyleSheet, Text, View, TextInput, StatusBar, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Top!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Accounts!</Text>
        </View>
    );
}


function Setting() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tags!</Text>
        </View>
    );
}



function Search() {
    const Tab = createMaterialTopTabNavigator();

    return (

        <KeyboardAvoidingView style={styles.container} >

            <View style={styles.subConatiner}  >
                <TextInput
                    placeholder="Search"
                    style={styles.input}

                />

            </View>

            <Tab.Navigator>
                <Tab.Screen name="Top" component={HomeScreen} />
                <Tab.Screen name="Accounts" component={SettingsScreen} />
                <Tab.Screen name="Tags" component={Setting} />
            </Tab.Navigator>




        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,

    },

    subConatiner: {
        padding: 10,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',

    },

    input: {
        borderWidth: 1,
        width: "100%",
        fontSize: 16,
        padding: 5,
        borderRadius: 7,
        paddingLeft: 15,
        borderColor: '#eeeeee',
        backgroundColor: '#eeeeee'
    }
})

export default Search;
