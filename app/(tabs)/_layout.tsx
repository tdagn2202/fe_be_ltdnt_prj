import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'
const _layout = () => {
  return (
    <Tabs
        tabBar={(props) => <TabBar {...props}/>}
    >
        <Tabs.Screen name="index" options={{title: "Home", headerShown: false}}/>
        <Tabs.Screen name="grading" options={{title: "Grading", headerShown: false}} />
        <Tabs.Screen name="notify" options={{title: "Notification", headerShown: false}}/>
        <Tabs.Screen name="user" options={{title: "User", headerShown: false}}/>
        
    </Tabs>
  )
}

export default _layout