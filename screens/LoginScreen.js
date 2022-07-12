import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Button, Input, Image} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import logo from '../assets/message-logo.png'

const LoginScreen = () => {

 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
     
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          console.log(authUser?._delegate?.photoURL)
          if (authUser) {
            navigation.replace("Home");
          }
        });
    
        return unsubscribe;
      }, []);

      const signIn= () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .catch((error) => alert(error));
      };

    const navigation = useNavigation()

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style="light"/>

        <Image 
        
        source={
        logo}
        style={{width: 300, height: 300}}
        />

        <View style={styles.inputContainer}>

            <Input containerStyle={{border: "none", borderColor: "transparent"}} autoFocus value={email} onChangeText={(text)=>setEmail(text)} type="email" placeholder='Email'/>
            <Input containerStyle={{borderColor: "transparent"}} autoFocus value={password} onChangeText={(text)=>setPassword(text)} type="password" secureTextEntry placeholder='Password' onSubmitEditing={signIn}/>
       
        </View>

        <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
        <Button containerStyle={styles.button} onPress={()=>navigation.navigate('Register')} type="outline" title="Register"/>
        
        <View style={{height: 100}}/>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    
    inputContainer: {
        width: 300,
    },

    button: {
        width: 200,
        marginTop: 10,
    }
})