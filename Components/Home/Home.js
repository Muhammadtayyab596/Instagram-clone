import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import Stories from '../Stories/Stories';
import { NavigationContainer } from '@react-navigation/native';

import Posts from '../Posts/Posts';
import { auth, db } from '../Firebase/Config';
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc } from "firebase/firestore";




function Home() {

    // const auth = getAuth();
    

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

                <View style={styles.Header}>

                    <View style={styles.instagramLogo} >
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../Images/Logo.png')}
                        />
                    </View>

                    <View style={styles.messengerIcon} >
                        <Ionicons
                            name="md-paper-plane-outline"
                            size={30}
                            color='black'

                        />
                    </View>

                </View>


                <Stories />
                <Posts />
                {/* <Posts /> */}
            </ScrollView>

            {/* Story slider */}










        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'white'
    },


    Header: {
        flex: 0.09,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,

    },

    tinyLogo: {
        width: 150,
        height: 60,
    },

    messengerIcon: {
        marginRight: 15
    },


});



export default Home
