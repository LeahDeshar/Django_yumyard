import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from '@gorhom/bottom-sheet'

const PayButton = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Icon name="money-bill-wave" size={22} color="#FF3B9D" />
    </TouchableOpacity>
  )
}

export default PayButton
const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: '#FF3B9D',
        borderRadius: 10,
        flexDirection:'row',
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginRight: 15
    },
    title:{
        color: '#FF3B9D',
        fontSize: 18,
        marginRight: 10
    }
})