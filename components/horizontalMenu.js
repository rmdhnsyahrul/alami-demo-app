import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'

const HorizontalMenu = ({navigation}) => {
  const [menu, setMenu] = useState([
    {key: '1' , iconName: 'folder-outline', menu: 'Account'}, 
    {key: '2', iconName: 'star-outline', menu: 'Camera'},
    {key: '3', iconName: 'inbox-outline', menu: 'Home'},
    {key: '4', iconName: 'check-circle-outline', menu: null},
    {key: '5', iconName: 'book-outline', menu: null},
    {key: '6', iconName: 'alarm', menu: null},
    {key: '7', iconName: 'archive-arrow-down-outline', menu: null},
  ]);
  
  const handlePressed = (menu) => {
    if(menu) {
      goToScreen(menu)
    }
  }

  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }

  const renderElement = (menu) => {
    if(menu == navigation.state.routeName) {
      return (
        <View style={{flex:1, borderBottomColor: 'blue', borderBottomWidth: 2, height: 4}}></View>
      )
    }
  }

  return (
    <View style={[styles.container, {alignItems: 'center', paddingVertical: 14, borderBottomColor: '#dedede', borderBottomWidth: 1}]}>
      <View style={styles.arrowLeft}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chevron-left" size={16} color="black" /> 
        </TouchableOpacity>
      </View>
      <FlatList
        style={{marginHorizontal: 20}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={menu}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePressed(item.menu)} style={{height: 30, paddingHorizontal: 30}}>
            <MaterialCommunityIcons name={item.iconName} size={16} color={item.menu == navigation.state.routeName ? "blue" : "black"} />
            { renderElement(item.menu) }
          </TouchableOpacity>
        )}
      />
      <View style={styles.arrowRight}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chevron-right" size={16} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  arrowLeft: {
    position: 'absolute',
    left: 10,
    top: 13
  },
  arrowRight: {
    position: 'absolute',
    right: 10,
    top: 13
  }
});

export default withNavigation(HorizontalMenu)