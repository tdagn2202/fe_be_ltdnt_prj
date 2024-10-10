import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, Button, StyleSheet, Text, View, Image, ImageBackground, TextInput, Touchable, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import ToastNotification from './toastNotification';
import { useState } from 'react';
import axios from 'axios';
import { createIconSetFromFontello } from '@expo/vector-icons';
var IP = require('./ipAdress')
export default function Login({  }) {
  const navigation = useNavigation();
  const [showNotify, setshowNotify] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const loginAPI = `http://${IP.ipAddress}:5000/api/student/login`
  const getAccountAPI = `http://${IP.ipAddress}:5000/api/student/`
  const notifyStyle = "ABC"
  const notifyContext = "XYZ"
  const NaviHome = () => {
    router.navigate('/(tabs)')
  }


  const handleLogin = async () => { 
    if(!username || !password){
      console.log('Empty username or password')
    } else {

    
    console.log(`Logged in with ${username}, ${password}`);
    
    try {
      const res = await axios.post(loginAPI, { username, password });
      NaviHome();
      console.log(`Successfully logged in`)
      
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setshowNotify(!showNotify);

          setTimeout(() => {
            setshowNotify(false)
          }, 1000);

          const status = err.response.status;
          
          switch (status) {
            case 404:
              console.log('User not found');
              break;
            case 401:
              console.log('Incorrect username or password');
              break;
            default:
              console.log('nothing');
              break;
          }
        }
      }
    }
  }
  };
  

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior='padding'
      enabled={Platform.OS === 'ios'}
      keyboardVerticalOffset={10}
    >
      
      <View style={styles.container1}>
        <ImageBackground
          style={styles.image1}
          // source={require("../data/General/background_banner.png")}
            source={require("../assets/images/background_banner.png")}
        >
          <Text style={styles.text1}>       STUDENT
            MANAGEMENT
          </Text>
        </ImageBackground>
      </View>

      <View style={styles.container2}>

        <Text style={styles.text2}>LOGIN</Text>
        <TextInput 
            style={styles.containertxt} 
            placeholder='Enter your username' 
            placeholderTextColor={'#d4d4d4'}
            onChangeText = {(text)=> setUsername(text)
            }/>
        <TextInput 
          style={styles.containertxt} 
          placeholder='Enter your password' 
          placeholderTextColor={'#d4d4d4'}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        
        <TouchableOpacity style={{ marginBottom: 30 }}>
          <Text style={styles.forgotPass}>I have forgot my password</Text>
        </TouchableOpacity>

        {/* BUTTON LOGIN CODE AREA HERE */}

        <TouchableOpacity style={styles.buttonLogin}
          // onPress={()=> router.navigate('/(tabs)')}
          onPress = {()=> handleLogin()}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>Login</Text>
        </TouchableOpacity>
        {
          showNotify && <ToastNotification icon= 'question' notifyStyle='Login failed' notifyContext='Negav ha?'/>
        }
        {/* {showNotify && 
            <ToastNotification notifyStyle="Chấm hỏi" notifyContext="Mày Negav hả gì mà quên acc sinh viên?" />
        } */}
        {/* --------------------------------- */}

        <View style={styles.line}></View>

        <View style = {{alignItems: 'center', bottom: 25,}}>
          <View style={{ marginTop: 200 }}>
            <Text style={{ color: '#b1b1b1', fontWeight: 'bold', fontSize: 13 }}>New to us?</Text>
          </View>

          {/* CODE FOR SIGN UP FOR A NEW ACCOUNT AREA  */}

          <TouchableOpacity style={{ marginBottom: 30 }}
            onPress={()=> router.navigate('/register')}
          >
            <Text style={{ color: '#779dca', fontWeight: 'bold', fontSize: 15, textDecorationLine: 'underline' }}>Sign up a free account</Text>
          </TouchableOpacity>

          {/* --------------------------------- */}
          

        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },

  container1: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 0,
    overflow: 'hidden',
  },

  container2: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },

  image1: {
    width: "100%",
    height: "100%",
    justifyContent: 'center', // Canh giữa nội dung bên trong ảnh
    alignItems: 'center',
  },

  text1: {
    color: 'white',    // Màu chữ trắng để nổi bật trên ảnh
    fontSize: 45,      // Kích thước chữ
    fontWeight: 'bold',
    marginTop: 10,
  },

  text2: {
    color: '#15539e',    // Màu chữ trắng để nổi bật trên ảnh
    fontSize: 45,      // Kích thước chữ
    fontWeight: 'bold',
    marginTop: 40,

  },

  containertxt: {
    width: '75%',
    height: '7%',
    backgroundColor: '#ededed',
    margin: 7,
    borderRadius: 20,
    paddingLeft: 15,
  },

  forgotPass: {
    color: '#12469a',
    marginTop: 13
  },

  buttonLogin: {
    width: '50%',
    height: '7%',
    backgroundColor: '#15539e',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },

  line: {
    width: '50%',
    height: '0.2%',
    backgroundColor: '#ededed',
    marginTop: 20,
  },

});