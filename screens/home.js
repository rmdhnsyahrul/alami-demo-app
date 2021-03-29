import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';

import Header from '../components/header'
import HorizontalMenu from '../components/horizontalMenu'
import AppButton from '../components/appButton'
import { globalStyles } from '../assets/styles/global'

import { SwipeListView } from 'react-native-swipe-list-view'
import Inboxs from '../models/inboxs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Home({navigation}) {
	const messages = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  const [inbox, setInboxs] = useState(Inboxs);

  const [selectedItem, setSelectedItem] = useState();

  const pressHandler = (key) => {
    const aKey = selectedItem == key ? null : key
    setSelectedItem(aKey)
  }

  const deletePressed = (key) => {
    setInboxs((prevInboxs) => {
      return prevInboxs.fillter(inbox => inbox.key != key)
    })
  }

	const closeRow = (rowMap, rowKey) => {
		if (rowMap[rowKey]) {
				rowMap[rowKey].closeRow();
		}
	};

	const deleteRow = (rowMap, rowKey) => {
			closeRow(rowMap, rowKey);
			const newData = [...inbox];
			const prevIndex = inbox.findIndex(item => item.key === rowKey);
			newData.splice(prevIndex, 1);
			setInboxs(newData);
	};
  const renderItem = data => (
    <TouchableOpacity
			onPress={() => pressHandler(data.item.key)}
			style={[styles.rowFront, {backgroundColor: data.item.key == selectedItem ? "#e9f5f8" : "#ededed"}]}
			activeOpacity={1}
    >
			<View style={styles.card}>
				<View style={styles.cardLeft}>
					<View style={styles.profileImage}>
						<MaterialCommunityIcons name="account" size={28} style={globalStyles.lightGrey} /> 
					</View>
					<MaterialCommunityIcons name="dots-vertical" size={16} style={globalStyles.lightGrey} /> 
				</View>
				<View style={styles.cardRight}>
					<Text style={styles.messageFrom}>{data.item.from}</Text>
					<Text numberOfLines={1} style={styles.messageTitle}>{data.item.subject}</Text>
					<Text numberOfLines={2} style={styles.messageBody}>{messages}</Text>
				</View>
			</View>
			{ renderButton(data.item.key) }
    </TouchableOpacity>
  );
  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
			<TouchableOpacity
				style={[styles.backRightBtn, styles.backRightBtnLeft]}
			>
				<MaterialCommunityIcons name="star-outline" color="#fff" size={24} /> 
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.backRightBtn, styles.backRightBtnRight]}
				onPress={() => deleteRow(rowMap, data.item.key)}
			>
				<MaterialCommunityIcons name="delete-outline" color="#fff" size={24} /> 
			</TouchableOpacity>
	</View>
);
 const renderButton = (key) => {
    if(key == selectedItem) {
      return (
        <View style={{flexDirection: 'row', marginBottom: 16}}>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <MaterialCommunityIcons name="reply" size={16} style={globalStyles.lightGrey} /> 
          </TouchableOpacity>
          
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <MaterialCommunityIcons name="forward" size={16} style={globalStyles.lightGrey} /> 
          </TouchableOpacity>
      </View>
      )
    }
  }
  return (
    <View style={globalStyles.container}>
      <Header />
      <HorizontalMenu />
      {/* <AddInbox submitHandler={submitHandler}/> */}
      {/* <FlatList
        data={inbox}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <InboxItem
            item={item}
            pressHandler={pressHandler}
            selectedItem={selectedItem}
            onDeletePressed={deletePressed}
          />
        )}
      /> */}
      <SwipeListView
        data={inbox}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
      <View style={styles.bottom}>
        <AppButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    alignItems: 'center'
  },
  rowFront: {
      alignItems: 'center',
      backgroundColor: '#F9F9F9',
      // borderBottomColor: 'black',
      // borderBottomWidth: 1,
      justifyContent: 'center',
      // height: 150,
  },
  rowBack: {
      alignItems: 'center',
      backgroundColor: '#DDD',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
},
backRightBtnLeft: {
    backgroundColor: '#ffb861',
    left: 0,
		bottom: 0
},
backRightBtnRight: {
    backgroundColor: '#ff6961',
    right: 0,
},
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
});
