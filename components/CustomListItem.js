import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from "react-native-elements";

import React from 'react'

const CustomListItem = ({id, chatName, enterChat}) => {
  return (
    <ListItem key={id} onPress={() => enterChat(id, chatName)} bottomDivider>
      <Avatar
        rounded
        source={{ 

          uri:
           "https://connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png",
        }}
      />
      <ListItem.Content>
        
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Test
        </ListItem.Subtitle>
      
      </ListItem.Content>
    
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})