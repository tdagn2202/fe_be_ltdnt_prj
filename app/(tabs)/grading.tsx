import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'




const grading = () => {

  return (
    <View style = {{backgroundColor: 'white', flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity style = {{height: 30, width: '25%', backgroundColor:'#12469a', borderRadius: 40, alignItems: 'center',
        justifyContent: 'center'
      }}
        onPress={()=> {}}
      
      >
        <Text style = {{
          color: 'white', fontSize: 15, fontWeight: 'bold'
        }}>GRADING</Text>
      </TouchableOpacity>
      <TextInput
        placeholder='Input Student code'
        style ={{}}
      >

      </TextInput>
    </View>
  )
}

export default grading