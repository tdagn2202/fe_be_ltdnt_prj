import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// import CheckBox from 'react-native-check-box';
import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';
import { router } from 'expo-router';

export default function Register({ }) {

    const [isSelected, setSelection] = useState(false);
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
                <TextInput style={styles.containertxt} placeholder='Enter your username' placeholderTextColor={'grey'}/>
                <TextInput style={styles.containertxt} placeholder='Enter your password' placeholderTextColor={'grey'}/>
                <TextInput style={styles.containertxt} placeholder='Enter your email' placeholderTextColor={'grey'}/>
                <TextInput style={styles.containertxt} placeholder='Re-enter your email' placeholderTextColor={'grey'}/>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                        color={'#12469a'}
                    />
                    <Text style={styles.label}>I accept ...</Text>
                </View>

                <TouchableOpacity style={styles.buttonRegister}
                    onPress={() => router.back()}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17}}>Register</Text>
                </TouchableOpacity>

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
});