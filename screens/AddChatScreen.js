import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button, Input, Image} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { db } from '../firebase';


const AddChatScreen = ({navigation}) => {

  // const navigation = useNavigation();

  const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new Chat",
            headerBackTitle: "Chats",

        })
    }, [navigation]);

    const handleCreateChat = async () => {
        await db.collection("chats").add({
           chatName: input 
        }).then(() => {
            navigation.goBack()
        }).catch((error) => alert(error));
    }

  return (
    <View style={styles.container}>
      <Input 
        placeholder='Enter a chat name' value={input} onChangeText={(text) => setInput(text)}
        onSubmitEditing={handleCreateChat}
        leftIcon={
        <Icon name="wechat" type="antdesign"  size={24} color= "black" />
        }
      />
      <Button
        disabled={!input}
        onPress={handleCreateChat}
        title="Create new chat"
      />
  </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
  container: {
      backgroundColor: "white",
      padding: 30,
      height: "100%",
  }
})