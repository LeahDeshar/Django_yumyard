import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PayButton from './PayButton'
const Payment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Payment Method</Text>
        <Text style={styles.titleRs}>Rs. 200.00</Text>
      </View>
      <View style={styles.btnContainer}>
        <PayButton title={"Cash"}/>
        <PayButton title={"Khalti"}/>

      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
    title:{
      fontSize: 17,

    },
    titleRs:{
        color: '#FF3B9D',
      fontSize: 17,

    },
    btnContainer:{
        flexDirection:'row',
        padding:10,
        paddingBottom: 16,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    }
})