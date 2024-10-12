import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
var IP = require('../ipAddress')
import ScheduleItem from './sheduleItem'
const getScheduleURL = `http://${IP.ipAddress}:5000/api/student/getSchedule`


interface ScheduleItem {
    CourseName: string;
    Username: string;
    DayOfWeek:string;
    StartTime: string;
    EndTime: string;
    Room: string;
    CourseID: string
  }

const scheduleList = () => {
    const [data, setData] = useState('B2203551')
    const [res, setRes] = useState<ScheduleItem[]>([]);
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

    useEffect(() => {
        getDataHandler();
    }, [])

  return (
    <FlatList
        data={res}
        horizontal = {true}
        renderItem={({item}) => {
            return (
                <View>
                    <ScheduleItem scheduleItem={item} />
                </View>
            )
        }}
    >


    </FlatList>
  )
}

export default scheduleList

const styles = StyleSheet.create({})