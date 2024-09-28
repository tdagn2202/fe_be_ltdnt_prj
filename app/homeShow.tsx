import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import indexScreen from './index'
const homeShow = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="index" options={{ headerShown: false }} component={indexScreen}/>
    </Stack.Navigator>
  )
}

export default homeShow