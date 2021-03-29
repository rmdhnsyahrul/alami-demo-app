import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../assets/styles/global';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Header() {
	return (
		<View style={styles.header}>
			<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
				<MaterialCommunityIcons name="menu" size={16} color="black" />
				<MaterialCommunityIcons name="magnify" size={16} color="black" />
			</View>
			<View style={{flex: 6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
				<Text style={[globalStyles.headerTitle, {flex:5, textAlign: 'center'}]}>Inbox</Text>
				<View style={{flex: 1, alignItems: 'flex-end'}}>
					<View style={{backgroundColor: '#dedede', borderRadius: 20, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
						<MaterialCommunityIcons name='account' size={16} color='black' style={styles.button}/>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		height: 80,
		paddingTop: 38,
		paddingHorizontal: 10,
		borderBottomColor: '#dedede',
		borderBottomWidth: 1,
	}
});