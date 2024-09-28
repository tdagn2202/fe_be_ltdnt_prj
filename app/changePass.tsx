import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// import CheckBox from 'react-native-check-box';
import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { useScrollViewOffset } from 'react-native-reanimated';

export default function Register({}) {

    const [isSelected, setSelection] = useState(false);
    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior='padding'

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
                <Text style={styles.text2}>CHANGING PASSWORD</Text>
                <TextInput style={styles.containertxt} placeholder='Enter your current password'></TextInput>
                <TextInput style={styles.containertxt} placeholder='Enter your new password'></TextInput>
                <TextInput style={styles.containertxt} placeholder='Re-enter your new password'></TextInput>

                <TouchableOpacity style={styles.buttonRegister}
                    onPress={() => console.log('Change passowrd button hitted')}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17}}>Change my password</Text>
                </TouchableOpacity>
                
                <View
                    style = {{top: 15}}>
                    <Button
                        title = 'Go back'
                        color={'#12469a'}
                        onPress={() => router.back()}
                    />
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
        fontSize: 27,      // Kích thước chữ
        fontWeight: 'bold',
        marginVertical: 35,
        marginTop: 50,
    },

    containertxt: {
        width: '75%',
        height: '7%',
        backgroundColor: '#ededed',
        margin: 7,
        borderRadius: 20,
        padding: 15,
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
        width: '60%',
        height: '7%',
        backgroundColor: '#15539e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 60,
    },
});