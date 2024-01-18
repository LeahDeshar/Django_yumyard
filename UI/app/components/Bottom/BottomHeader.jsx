import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BottomHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver's on the way</Text>
      <Text style={styles.timer}>1:00</Text>
    </View>
  )
}
export default BottomHeader

const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        marginHorizontal: 20,
        paddingTop: 20
    },
    timer:{
      fontSize: 17,
      color: '#cc00cc',
    },
    title:{
      fontSize: 17
    }
})