import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState,   } from 'react'
import axios from 'axios';

var IP = require('../../ipAddress')

const getDataURL = `http://${IP.ipAddress}:5000/api/student`
const getScheduleURL = `http://${IP.ipAddress}:5000/api/student/getSchedule`

const grading = () => {
  
  const [res, setRes] = useState(undefined)
  const [btnClicked, setBtnClicked] = useState(false)
  const [data, setData] = useState('B2203551')
  useEffect(() => {
    getDataHandler();
  }, [btnClicked]);

  const getDataHandler = async () => {
      console.log('accessed');
      try {
        const result = await axios.post(getScheduleURL, {
          Username: data,
        })

        console.log(JSON.stringify(result.data.schedule))
      } catch (e) {
        console.log('error fetching data:', e);
        return;
      }
    };

  

  return (
    <ScrollView contentContainerStyle = {{backgroundColor: 'white', flex:1, alignItems: 'center', justifyContent: 'center'}}>
      
      <TouchableOpacity style = {{height: 30, width: '25%', backgroundColor:'#12469a', borderRadius: 40, alignItems: 'center',
        justifyContent: 'center'
      }}
        onPress={()=> {setBtnClicked(!btnClicked)}}
      
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
      {/* <FlatList 
        data={res}
        renderItem={({item})=> 
          <View style ={{flexDirection: 'row'}}>
            <Text style = {{fontWeight: 'bold'}}>{item.UserID}</Text>
            <Text>{item.Username}</Text>
            </View>
        }
      >

      </FlatList> */}
    </ScrollView>
  )
}

export default grading