import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'


const Title = ({children}) => {
  return (
      <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    
  title:{
    fontFamily:'open-sans-bold',
    fontSize:18,
    color:'white',
    textAlign:'center',
    borderWidth:2,
    borderColor:'white',
    margin:14,
  }
})