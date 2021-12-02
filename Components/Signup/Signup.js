import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, StatusBar, KeyboardAvoidingView, Image } from 'react-native';
import { auth, db } from '../Firebase/Config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc } from "firebase/firestore";






function Signup({ navigation }) {


    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const getValues = () => {


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const uid = user.uid;

                try {
                    const docRef = addDoc(collection(db, "users"), {
                        email,
                        password,
                        uid,
                        username
                    });
                    console.log("Document written with ID: ");
                } catch (e) {
                    console.error("Error adding document: ", e);
                }



                console.log("sucessfully login");

                Alert.alert(
                    "Welldone",
                    "You successfully create account",
                    [

                        { text: "Next", onPress: () => navigation.navigate('Login') }
                    ]
                );

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error", errorMessage);
                Alert.alert(errorMessage)
                // ..
            });


    }



    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container} >

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}  >
                <View style={styles.mainContainer}  >

                    <View style={styles.logoContainer} >
                        <Image
                            style={styles.logoPicture}
                            source={require('../../Images/Logo.png')}
                        />
                    </View>

                    <View style={styles.inputContainer} >
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            onChangeText={e => setUsername(e)}

                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email or phone number "
                            onChangeText={e => setEmail(e)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={e => setPassword(e)}

                        />
                    </View>

                    <View style={styles.createBtn} >
                        <TouchableOpacity
                            style={styles.button}
                            onPress={getValues}

                        >
                            <Text style={styles.textBtn}  >Create Account</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.alreadyAccount} >
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                            <Text style={styles.alreadyAccountText} >If you have already account ?
                                <Text style={styles.login}> Login </Text>

                            </Text>

                        </TouchableOpacity>
                    </View>

                </View>

            </TouchableWithoutFeedback>



        </KeyboardAvoidingView>
    )
}




const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
        , backgroundColor: "#f5f5f5"
    },

    mainContainer: {
        flex: 1,
        alignItems: "center"

    },


    logoContainer: {
        // backgroundColor: 'red',
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 160

    },
    logoPicture: {

        width: 200,
        height: 60,
    },

    inputContainer: {
        marginTop: 30,
    },

    input: {
        height: 50,
        width: 350,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 10,
        borderRadius: 5,
        fontSize: 16,
        borderColor: "lightgrey",
        // backgroundColor:'white'
    },

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 15,
        width: 350,
        borderRadius: 5,
        backgroundColor: "#1877f2",

    },

    createBtn: {
        marginTop: 30
    },

    textBtn: {
        color: "white",
        fontSize: 16,
        fontWeight: '700'

    },
    alreadyAccount: {

        marginTop: 20,

    },
    alreadyAccountText: {
        fontWeight: '500',
        fontSize: 15
    },

    login: {
        fontWeight: 'bold',
        color: "#1877f2",
        fontSize: 16

    }

});


export default Signup
