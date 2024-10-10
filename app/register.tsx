import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// import CheckBox from 'react-native-check-box';
import CheckBox from 'expo-checkbox';
import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';
import ToastNotification from './toastNotification'
import axios from 'axios';
const signUpAPI = 'http://10.13.132.103:5000/api/student/signup'
export default function Register({ }) {
    const [isDisabled, setDisabled] = useState(true)
    const [isSelected, setSelection] = useState(false);
    const [signUpUserName, setSignUpUserName] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [showNotify, setshowNotify] = useState(false)
    const NaviLogin = () => {
        router.navigate('/homeShow')
      }
    const signUpHandler = async () => { 
        if(!signUpUserName || !signUpPassword || !signUpEmail || !confirmEmail){
            console.log('Missing information?')
        } else {
            console.log(`Signing up with: ${signUpUserName}, ${signUpPassword}, ${signUpEmail}`)
            try {
                const res = await axios.post(signUpAPI, {
                    username: signUpUserName, 
                    password: signUpPassword})
                setshowNotify(true)
                
                setTimeout(() => {
                    NaviLogin()
                }, 2000);

                console.log('ABC')
                setTimeout(() => {
                    setshowNotify(false)
                }, 2000);

            } catch (err: unknown) {
                if(axios.isAxiosError(err)){
                    if(err.response){
                        const status = err.response.status;

                        switch (status){
                            case 401: {
                                console.log('Unknow failure')
                                break;
                            }
                            default: 
                                console.log('Server error')
                                break;
                        }
                    }
                }
            }
        }
    }

    useEffect(() => {
        if (isSelected) {
            setDisabled(false); // Enable button when checkbox is selected
        } else {
            setDisabled(true);  // Disable button when checkbox is not selected
        }
    }, [isSelected]);

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior= "padding"
            enabled
            keyboardVerticalOffset={10}
        >
            <View style={styles.container1}>
                <ImageBackground
                    style={styles.image1}
                    source={require("../assets/images/background_banner.png")}
                >
                    <Text style={styles.text1}>       STUDENT
                        MANAGEMENT
                    </Text>
                </ImageBackground>
            </View>

            <View style={styles.container2}>
                <Text style={styles.text2}>CREATE A NEW ACCOUNT</Text>
                <TextInput 
                    style={styles.containertxt} 
                    placeholder='Enter your username' 
                    placeholderTextColor={'grey'}
                    onChangeText={(text) => setSignUpUserName(text)}
                    />
                <TextInput 
                    style={styles.containertxt} 
                    placeholder='Enter your password' 
                    placeholderTextColor={'grey'}
                    onChangeText={(text) => setSignUpPassword(text)}
                    />
                <TextInput 
                    style={styles.containertxt} 
                    placeholder='Enter your email' 
                    placeholderTextColor={'grey'}
                    onChangeText={(text) => setSignUpEmail(text)}
                    />
                <TextInput 
                    style={styles.containertxt} 
                    placeholder='Re-enter your email' 
                    placeholderTextColor={'grey'}
                    onChangeText={(text)=> setConfirmEmail(text)}
                    />

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={()=>setSelection(!isSelected)}
                        style={styles.checkbox}
                        color={'#12469a'}
                    />
                    <Text style={styles.label}>I accept ...</Text>
                </View>

                <TouchableOpacity
                    style={isDisabled ? styles.buttonRegisterDiabled : styles.buttonRegister}
                    onPress={() => signUpHandler()}
                    disabled={isDisabled}
                >
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>Register</Text>
            </TouchableOpacity>
            {
                showNotify && (
                    <ToastNotification icon = 'checkcircleo' notifyStyle='Sucessfully' notifyContext='Tạo tài khoản thành công'/>
                )
            }

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
        justifyContent: 'center',
        alignItems: 'center',
    },

    text1: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        marginTop: 10,
    },

    text2: {
        color: '#15539e',    // Màu chữ trắng để nổi bật trên ảnh
        fontSize: 25,      // Kích thước chữ
        fontWeight: 'bold',
        marginVertical: 35,
        marginTop: 50,
    },

    containertxt: {
        width: '75%',
        height: '7%',
        backgroundColor: '#ededed',
        margin: 7,
        borderRadius: 40,
        paddingLeft: 15,
    },

    checkboxContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },

    checkbox: {
        alignSelf: 'center',
        borderRadius: 5,
    },

    label: {
        margin: 8,
        color: '#b3b3b3',
        fontSize: 18,
    },

    buttonRegister: {
        width: '50%',
        height: '7%',
        backgroundColor: '#15539e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 60,
    },
    buttonRegisterDiabled: {
        width: '50%',
        height: '7%',
        backgroundColor: '#dbdbdb',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 60,
    },
});