import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState,   } from 'react'
import axios from 'axios';

var IP = require('../../ipAddress')

const getDataURL = `http://${IP.ipAddress}:5000/api/student`

const grading = () => {
  
  const [res, setRes] = useState(undefined)
  useEffect(() => {
    getDataHandler();
  }, []);

  const getDataHandler = async () => {
      console.log('clicked');
      await axios.get(getDataURL).then((res) => {
          return res.data;
      }).then((data) => {
        setRes(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    };

  

  return (
    <ScrollView contentContainerStyle = {{backgroundColor: 'white', flex:1, alignItems: 'center', justifyContent: 'center'}}>
      
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
      <FlatList 
        data={res}
        renderItem={({item})=> 
          <View style ={{flexDirection: 'row'}}>
            <Text style = {{fontWeight: 'bold'}}>{item.UserID}</Text>
            <Text>{item.Username}</Text>
            </View>
        }
      >

      </FlatList>
    </ScrollView>
  )
}

export default grading