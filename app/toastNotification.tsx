import { View, Text, StyleSheet, Easing } from 'react-native'
import React from 'react'
import Animated, { FadeInDown, FadeOutUp, SlideInDown, SlideInLeft, SlideInUp } from 'react-native-reanimated';
import AntDesign from '@expo/vector-icons/AntDesign';


interface toastProps {
  notifyStyle: string,
  notifyContext: string,
}

const toastNotification = () => {
  return (
    <Animated.View 
      entering={SlideInUp}
      exiting={FadeOutUp}
      style = {[{justifyContent: 'center'}]}>
      <View style = {{
        flexDirection: 'row',
        position: 'relative',
        height: 60,
        width: 300,
        borderRadius: 50,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        
        bottom: 530
      }}>
        <View style = {{
          
          marginLeft: 7,
          height: 50,
          width: 50,
          borderRadius: 50,
          backgroundColor: '#12469a',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <AntDesign name="question" size={25} color="white"/>
        </View>
        <View style = {{paddingLeft: 10}}>
          <Text>Login failed</Text>
          <Text>M Negav hả?</Text>
        </View>
      </View>
    </Animated.View>
  )
}

export default toastNotification