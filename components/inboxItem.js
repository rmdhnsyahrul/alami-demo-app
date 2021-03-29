import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { globalStyles } from '../assets/styles/global'
import * as GestureHandler from 'react-native-gesture-handler'
const { Swipeable } = GestureHandler

export default function InboxItem({ item, selectedItem, pressHandler, onDeletePressed }) {
  const messages = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  const renderButton = (key) => {
    if(key == selectedItem) {
      return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 16}}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="reply" size={16} style={globalStyles.lightGrey} /> 
          </TouchableOpacity>
          
          <TouchableOpacity>
            <MaterialCommunityIcons name="forward" size={16} style={globalStyles.lightGrey} /> 
          </TouchableOpacity>
      </View>
      )
    }
  }

  const RightAction = () => {
    return (
      <TouchableOpacity style={[styles.actionContainer, styles.rightAction]}>
        <MaterialCommunityIcons name="delete-outline" color="#fff" size={24} /> 
      </TouchableOpacity>
    )
  }

  const LeftAction = () => {
    return (
      <TouchableOpacity style={[styles.actionContainer, styles.leftAction]}>
        <MaterialCommunityIcons name="star-outline" color="#fff" size={24} /> 
      </TouchableOpacity>
    )
  }
    return (
      <View style={{flex: 1, backgroundColor: item.key === selectedItem ? "#e9f5f8" : "#ededed"}}>
      <Swipeable
        renderRightActions={RightAction}
        renderLeftActions={LeftAction}
      >
			<TouchableOpacity onPress={() => pressHandler(item.key)} style={[styles.card]}>
          <View style={styles.cardLeft}>
            <View style={styles.profileImage}>
              <MaterialCommunityIcons name="account" size={28} style={globalStyles.lightGrey} /> 
            </View>
            <MaterialCommunityIcons name="dots-vertical" size={16} style={globalStyles.lightGrey} /> 
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.messageFrom}>{item.from}</Text>
            <Text numberOfLines={1} style={styles.messageTitle}>{item.subject}</Text>
            <Text numberOfLines={2} style={styles.messageBody}>{messages}</Text>
          </View>
      </TouchableOpacity>
        </Swipeable>
      { renderButton(item.key) }
      </View>
    )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    // marginTop: 16,
    // borderColor: '#bbb',
    // borderWidth: 1,
    // borderStyle: 'dashed',
    // borderRadius: 10
  },
  cardLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardRight: {
    flex: 9,
    paddingLeft: 20
  },
  profileImage: {
    height: 34,
    width: 34,
    borderRadius: 17,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18
  },
  item: {
  },
  messageFrom: {
    color: '#aeaeae'
  },
  messageTitle: {
    fontFamily: 'opensans-bold',
    letterSpacing: 1
  },
  messageBody: {
    color: '#aeaeae'
  },
  actionContainer: {
    paddingHorizontal: 16, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  rightAction: {
    backgroundColor: '#ff6961'
  },
  leftAction: {
    backgroundColor: '#ffb861'
  }
})