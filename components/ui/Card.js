import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Card = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
  },
})

export default Card