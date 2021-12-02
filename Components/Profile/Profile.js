import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Platform, ScrollView, Button } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, Ionicons, Feather, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { auth, db } from '../Firebase/Config';
import { onAuthStateChanged } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, addDoc, setDoc } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { TouchableOpacity } from 'react-native-gesture-handler';



function Profile() {

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);





    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };




    const [userData1, setuserData1] = useState(null)

    let userData;

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
            console.log("uid", uid);


            // console.log(uid);
            const q = query(
                collection(db, "users"),
                where("uid", "==", uid)
            );

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc);
                console.log(doc.data());
                userData = doc.data();
                console.log(userData.username);
                setuserData1(userData.username)
            });



        } else {
            // User is signed out
            // ...
        }
    });













    return (
        <View style={styles.container}>
            <View style={styles.profileHeader} >
                <View style={styles.imageContainer} >
                    {/* <Image

                        
                        source={require('../../Images/st3.jpg')}

                    /> */}
                    {image && <Image source={{ uri: image }} style={styles.profileImage} />}

                    {userData1 === " " ? (<Text>Loading</Text>) :
                        <Text style={{ textAlign: 'center', marginLeft: 20, fontSize: 17, fontWeight: "bold" }} >{userData1}</Text>
                    }
                </View>

                <View style={styles.descriptiopn} >
                    <Text style={{ fontSize: 17 }}  >Follower</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5 }} >1K</Text>
                </View>

                <View style={styles.descriptiopn} >
                    <Text style={{ fontSize: 17 }}  >Following</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5 }} >1K</Text>
                </View>

                <View style={styles.descriptiopn} >
                    <Feather
                        name='camera'
                        size={25}
                        style={{ marginRight: 23 }}
                        onPress={pickImage}

                    />
                </View>

            </View>




            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18, fontWeight: 'bold' }}  >Your Post</Text>
            <View style={styles.postimageConatiner}>
                <Image

                    style={styles.postImage}
                    source={require('../../Images/st2.jpg')}

                />
                <Image

                    style={styles.postImage}
                    source={require('../../Images/st1.jpg')}

                />
                <Image

                    style={styles.postImage}
                    source={require('../../Images/st3.jpg')}

                />

            </View>
            <TouchableOpacity style={{ padding: 10, width: "100%", justifyContent: 'center', alignItems:'flex-end', alignContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }} >Sign out</Text>


            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    profileHeader: {
        flex: 0.2,
        // backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    profileImage: {
        height: 73,
        width: 73,
        borderRadius: 50,
        marginTop: 30,
        marginBottom: 12,
        marginLeft: 25

    },
    descriptiopn: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    postImage: {
        width: 130,
        height: 130
    },
    postimageConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10

    }
})

export default Profile
