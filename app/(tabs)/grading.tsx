import { View, Text } from 'react-native'
import React from 'react'

const grading = () => {
  return (
    <View style = {{backgroundColor: 'white', flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <View style = {{height: 30, width: '25%', backgroundColor:'#12469a', borderRadius: 40, alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style = {{
          color: 'white', fontSize: 15, fontWeight: 'bold'
        }}>GRADING</Text>
      </View>
    </View>
  )
}

export default grading