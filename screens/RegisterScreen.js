import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import {Button, Input, Image} from 'react-native-elements'

const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const register = () => {

    }

    
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>

        <StatusBar style="light"/>

        <Text h3 style={{marginBottom: 50}}>Create a Signal account</Text>

        <View style={styles.inputContainer}>
        
            <Input
            placeholder="Full Name"
            autoFocus
            type="text"
            value={name}
            onChangeText={(text) => setName(text)}
            />

            <Input
            placeholder="Email"
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            />

            <Input
            placeholder="Password"
            type="password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            />

            <Input
            placeholder="Profile Picture URL (optional)"
            type="text"
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
            onSubmitEditing={register}
            />
        
        </View>

        <Button containerStyle={styles.button} raised title="Register" onPress={register} />
        <View style={{height: 100}}/>


    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },

    button: {
        width: 200,
        marginTop: 10,

    },

    inputContainer: {
        width: 300,
    }

})