import { View, Text, Pressable } from 'react-native'
import React from 'react'
import icons from '../assets/icons'
const TabBarButton = (props) => {
    const { routeName, isFocused, label, color} = props;
  return (
    <View>
        {
              icons[routeName]({
                color
              })
            }
            <Text style={{ 
                color, 
                fontSize:11
            }}>
              {label}
            </Text>
    </View>
  )
}

export default TabBarButton