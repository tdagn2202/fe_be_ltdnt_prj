import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Animated, { FadeOutUp, SlideInUp } from 'react-native-reanimated';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ToastProps {
  notifyStyle: string;
  notifyContext: string;
  icon: 'question' | 'checkcircleo' | 'filetext1';
}

const ToastNotification = ({ icon, notifyStyle, notifyContext }: ToastProps) => {
  return (
    <Animated.View 
      entering={SlideInUp}
      exiting={FadeOutUp}
      style={styles.toastContainer}
    >
      <View style={styles.toastBox}>
        <View style={styles.iconContainer}>
          <AntDesign name={icon} size={25} color="white" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.notifyStyleText}>{notifyStyle}</Text>
          <Text>{notifyContext}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    top: -235, // Adjust this value to set the vertical position
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000, // Ensures it's on top of other components
  },
  toastBox: {
    flexDirection: 'row',
    height: 60,
    width: 300,
    borderRadius: 50,
    backgroundColor: 'rgba(245, 245, 245, 0.8)', // Semi-transparent background
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1, // Lighter shadow for transparency
    shadowRadius: 3.84,
    elevation: 3, // Lower elevation for a subtle shadow effect
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(18, 70, 154, 0.8)', // Semi-transparent icon background
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  notifyStyleText: {
    fontWeight: 'bold',
  },
});


export default ToastNotification;
