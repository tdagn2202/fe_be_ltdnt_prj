import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, Button, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import ToastNotification from './toastNotification';
import { useState } from 'react';
import axios from 'axios';
import Feather from '@expo/vector-icons/Feather';
import User  from './(tabs)/user'
var IP = require('../ipAddress')




export default function Login() {
  const navigation = useNavigation();
  const [showNotify1, setShowNotify1] = useState(false);
  const [showNotify2, setShowNotify2] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [icon1, setIcon1] = useState<'filetext1' | 'checkcircleo' | 'question'>('filetext1');
  const [icon2, setIcon2] = useState<'filetext1' | 'checkcircleo' | 'question'>('checkcircleo');
  const [hide, setHide] = useState(true);
  const loginAPI = `http://${IP.ipAddress}:5000/api/student/login`;

  const NaviHome = () => {
    router.navigate('/(tabs)');
  }

  const handleLogin = async () => { 
    if(!username || !password){
      setIcon1('filetext1');
      setShowNotify1(true);
      console.log('Empty username or password');

      setTimeout(() => {
        setShowNotify1(false);
      }, 2000);
    } else {
      try {
        const res = await axios.post(loginAPI, { username, password });
        setIcon2('checkcircleo');
        setShowNotify2(true);

        setTimeout(() => {
          setShowNotify2(false);
          NaviHome();
        }, 2000);
        console.log(`Successfully logged in`);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setIcon1('question');
          setShowNotify1(true);

          setTimeout(() => {
            setShowNotify1(false);
          }, 2000);

          const status = err.response ? err.response.status : null;
          switch (status) {
            case 404:
              console.log('User not found');
              break;
            case 401:
              console.log('Incorrect username or password');
              break;
            default:
              console.log('An error occurred');
              break;
          }
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding' enabled={Platform.OS === 'ios'} keyboardVerticalOffset={10}>
      <View style={styles.container1}>
        <ImageBackground style={styles.image1} source={require("../assets/images/background_banner.png")}>
          <Text style={styles.text1}>      STUDENT 
            MANAGEMENT</Text>
        </ImageBackground>
      </View>

      <View style={styles.container2}>
        <Text style={styles.text2}>LOGIN</Text>
        <TextInput 
          style={styles.containertxt} 
          placeholder='Enter your username' 
          placeholderTextColor={'#d4d4d4'}
          onChangeText={setUsername}
        />
        <TextInput 
          style={styles.containertxt} 
          placeholder='Enter your password' 
          placeholderTextColor={'#d4d4d4'}
          onChangeText={setPassword}
          secureTextEntry={hide}
        />
        <TouchableOpacity onPress={() => setHide(!hide)} style={{ bottom: 37, left: 120 }}>
          <Text>{hide ? <Feather name="eye" size={20} color="grey" /> : <Feather name="eye-off" size={20} color="grey" />}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 30 }}>
          <Text style={styles.forgotPass}>I have forgot my password</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonLogin} 
          // onPress={handleLogin}
          onPress={() => router.navigate('/(tabs)')}
          >

          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>Login</Text>
        </TouchableOpacity>

        {showNotify1 && <ToastNotification icon={icon1} notifyStyle='Login failed' notifyContext='Tài khoản hoặc mật khẩu không hợp lệ' />}
        {showNotify2 && <ToastNotification icon={icon2} notifyStyle='Login successful' notifyContext='+1 đrl' />}

        <View style={styles.line}></View>

        <View style={{ alignItems: 'center', bottom: 25 }}>
          <View style={{ marginTop: 200 }}>
            <Text style={{ color: '#b1b1b1', fontWeight: 'bold', fontSize: 13 }}>New to us?</Text>
          </View>

          <TouchableOpacity style={{ marginBottom: 30 }} onPress={() => router.navigate('/register')}>
            <Text style={{ color: '#779dca', fontWeight: 'bold', fontSize: 15, textDecorationLine: 'underline' }}>Sign up a free account</Text>
          </TouchableOpacity>
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