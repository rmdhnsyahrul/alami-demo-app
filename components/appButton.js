import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign  } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'

class AppButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Account')}>
                <AntDesign name='delete' size={24} color='white' style={styles.button}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: '#0080ff',                                    
        position: 'absolute',
        bottom:10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default withNavigation(AppButton)