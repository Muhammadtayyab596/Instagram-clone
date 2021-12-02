import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native';


function Add() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button 
            title="Open Camera"
            />

        </View>
    )
}

export default Add


// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function Add() {
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS !== 'web') {
//         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (status !== 'granted') {
//           alert('Sorry, we need camera roll permissions to make this work!');
//         }
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   const openCamera = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
//       <Button title="Open camera" onPress={openCamera} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// }