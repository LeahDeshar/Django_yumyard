import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';
import Message from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const BottomFooter = () => {
  return (
    <View style={styles.container}>
      <CustomButton title='Cancle Ride'/>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.iconStyle}>
            <Icon name="phone" size={20} color={"#FF3B9D"}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconStyle}>
        <Message name="message-processing" size={20} color={"#FF3B9D"} />
        </TouchableOpacity>
        

      </View>
    </View>
  )
}

export default BottomFooter
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:'white',
        marginHorizontal: 20,
        paddingTop: 20
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '25%',
    },
    iconStyle: {
        borderRadius: 50,
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 11,
        borderColor: '#FF3B9D'
    }
   
})