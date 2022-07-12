import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from "react-native-elements";
import { db, auth } from "../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const HomeScreen = () => {

  const [chats, setChats] = useState([]);

    const navigation = useNavigation()  

  const signOutUser = () => {
    auth.signOut().then(()=>{
      navigation.replace("Login")
    })
  }

  useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot(snapshot => {
      setChats(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });console.log("unsubscribe" + unsubscribe);

    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
     
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL}} />
          </TouchableOpacity>
        </View>
      ),
     
      headerRight: () => (
        <View style={styles.headerRight}>
          
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => navigation.navigate("AddChat")}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={24} color="black" />
          
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);


  const enterChat = (id, chatName) => {
    navigation.navigate('Chat', {
      id,
      chatName
    })
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({id, data: {chatName}})=>(
            <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    marginRight: 20,
  },

  container: {
    height: "100%",
  },
});