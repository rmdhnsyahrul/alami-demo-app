import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'
import { globalStyles } from '../assets/styles/global'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LineChart } from 'react-native-chart-kit'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {chartData, chartConfig} from '../models/graph'

export default function Account() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.cardContainer}>
                <View style={[styles.card, {marginBottom: 30}]}>
                    <LinearGradient
                        start={[0.85, 0.45]}
                        end={[0, 1]}
                        // Button Linear Gradient
                        colors={['#63b9ff', '#ce63ff', '#ff63b9']}
                        style={styles.gradientCard}>
                            <View style={{height: 180, padding: 12}}>
                                <View style={{padding: 0, marginBottom: 6}}>
                                    <View style={{height: 40, width: 40, backgroundColor:'rgba(225, 225, 225, 0.25)', borderRadius: 40}}></View>
                                    <View style={{height: 40, width: 40, backgroundColor:'rgba(225, 225, 225, 0.25)', borderRadius: 40, position: 'absolute', left: 30}}></View>
                                </View>
                                <Text style={styles.cardNumber}>xxxx xxxx xxxx 2358</Text>
                                <View style={{flexGrow:1, flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{flex: 2}}>
                                        <Text style={styles.cardLabel}>VALID THRU</Text>
                                        <Text style={styles.cardValue}>07/22</Text>
                                    </View>
                                    <View style={{flex:3 }}>
                                        <Text style={styles.cardLabel}>CARD HOLDER</Text>
                                        <Text style={styles.cardValue}>Mahmudul Hasan</Text>
                                    </View>
                                </View>
                            </View>
                    </LinearGradient>
                </View>
            </View>
            
            <View style={styles.graph}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
                    <Text style={styles.headerText}>Revenue Overview</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="dots-vertical" size={18} style={globalStyles.lightGrey} /> 
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                        <Text style={globalStyles.lightGrey}>Current month</Text>
                        <Text style={[styles.graphAmount, {color: 'rgb(184, 15, 15)'}]}>$ 5735.00</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={globalStyles.lightGrey}>Previous month</Text>
                        <Text  style={[styles.graphAmount, {color: 'rgb(0, 149, 255)'}]}>$ 3452.50</Text>
                    </View>
                </View>
                <View>
                <LineChart
                    onDataPointClick={()=>{
                        // todo (custom function)
                        // get X and Y coordinate on user clicked
                        // show content right above X Y coordinate
                        // dismiss content on click outside content container
                    }}
                    withHorizontalLabels={false}
                    data={chartData}
                    width={Dimensions.get('window').width} // from react-native
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        marginLeft: -35
                    }}
                />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 60
    },
    cardContainer: {
        width: '90%',
        marginBottom: 40
    },
    gradientCard: {
        padding: 15,
        borderRadius: 15,
    },
    graph: {
        width: '90%',
        borderWidth: 2,
        borderColor: '#000',
        padding: 12
    },
    cardNumber: {
        color: '#FFF',
        fontFamily: 'opensans-bold',
        letterSpacing: 1,
        fontSize: 20,
        paddingVertical: 16,
        textTransform: 'uppercase'
    },
    cardLabel: {
        fontFamily: 'opensans-bold',
        color: 'rgba(255,255,255,0.5)'
    },
    cardValue: {
        fontFamily: 'opensans-bold',
        color: 'rgba(255,255,255,1)',
        fontSize: 16
    },
    graphAmount: {
        fontFamily: 'opensans-bold',
        fontSize: 22,
        letterSpacing: 1
    },
    headerText: {
        fontFamily: 'opensans-bold',
        fontSize: 18
    }
})