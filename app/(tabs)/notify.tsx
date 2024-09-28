import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const notify = () => {
  return (
    <View style = {styles.container}>
       <View style = {{height: 30, width: '25%', backgroundColor:'#12469a', borderRadius: 40, alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style ={{
          color: 'white', fontSize: 15, fontWeight: 'bold'
        }}>NOTIFY</Text>
      </View>
    </View>
  )
}

export default notify

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})