import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'
const _layout = () => {
  return (
    <Tabs
        tabBar={(props) => <TabBar {...props}/>}
    >
        <Tabs.Screen name="index" options={{title: "Home"}}/>
        <Tabs.Screen name="grading" options={{title: "Grading"}} />
        <Tabs.Screen name="notify" options={{title: "Notification"}}/>
        <Tabs.Screen name="user" options={{title: "User"}}/>
    </Tabs>
  )
}

export default _layout