import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Button, Input, Image} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {

    }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style="light"/>

        <Image 
        
        source={{
            uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{width: 200, height: 200}}
        />

        <View style={styles.inputContainer}>

            <Input autoFocus value={email} onChangeText={(text)=>setEmail(text)} type="email" placeholder='Email'/>
            <Input autoFocus value={password} onChangeText={(text)=>setPassword(text)} type="password" secureTextEntry placeholder='Password'/>
       
        </View>

        <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
        <Button containerStyle={styles.button} type="outline" title="Register"/>
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