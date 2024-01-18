import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomButton = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#d01e1e',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%'
    },
    title:{
        color: 'white',
        fontSize: 18,
    }
})

