import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'

import React, { useEffect, useState,   } from 'react'
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createIconSetFromFontello } from '@expo/vector-icons';
import ScheduleList from '@/components/scheduleList';
var IP = require('../../ipAddress')

const getDataURL = `http://${IP.ipAddress}:5000/api/student`
const getScheduleURL = `http://${IP.ipAddress}:5000/api/student/getSchedule`


interface ScheduleItem {
  Course: string;
  Username: string;
  DayOfWeek:string;
  StartTime: string;
  EndTime: string;
  Room: string;
}

interface getDataItem {
  Password: string;
}

const grading = () => {
  
  const [res, setRes] = useState<ScheduleItem[]>([]);
  const [btnClicked, setBtnClicked] = useState(false)
  const [data, setData] = useState('B2203551')
  useEffect(() => {
    getDataHandler();
  }, [btnClicked]);

  const getDataHandler = async () => {
      console.log('accessed');
      
      axios.post(getScheduleURL, {
        Username: data,
      }).then((response) => {
        setRes(response.data);
        console.log(response.data);
      }).catch((err) => {
        console.log('error fetching data:', err);
      }).finally(() => {console.log('done fetching data')})
    }
  

  return (
    <SafeAreaView style = {{flex:1,backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      
      <TouchableOpacity style = {{height: 30, width: '25%', backgroundColor:'#12469a', borderRadius: 40, alignItems: 'center',
        justifyContent: 'center'
      }}
        onPress={()=> {setBtnClicked(!btnClicked)}}
      
      >
        <Text style = {{
          color: 'white', fontSize: 15, fontWeight: 'bold'
        }}>GRADING</Text>
      </TouchableOpacity>
      <FlatList
        data={res}
        renderItem={({item}) => {
          return(
            <View style = {{flexDirection:'row', padding: 3}}>
              <Text style = {{paddingHorizontal: 3}}>{item.Course}</Text>
              <Text style = {{paddingHorizontal: 3}}>{item.DayOfWeek}</Text>
              <Text style = {{paddingHorizontal: 3}}>{item.StartTime}</Text>
              <Text style = {{paddingHorizontal: 3}}>{item.EndTime}</Text>
              <Text style = {{paddingHorizontal: 3}}>{item.Room}</Text>
            </View>
          )
        }}
        
      />
      <ScheduleList />
    </SafeAreaView>
  )
}

export default grading