import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Our Components
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Add from './Components/Add/Add';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';



import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Heart() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Heart!</Text>
    </View>
  )
}

function User() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User!</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard} />


        {/* TAB */}

        
        
      </Stack.Navigator>
    </NavigationContainer>



  );
}


