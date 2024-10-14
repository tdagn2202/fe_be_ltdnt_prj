import { router, useNavigation, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { useNavigationState, useRoute } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, FlatList, FlatListComponent } from 'react-native';
import axios from 'axios';
import {  } from 'react-native-gesture-handler';
import userImageMap from '../../assets/images/avatars/imgMap'
import { useUser } from '@/components/context';
var IP = require('../../ipAddress')
const getStudenInformationURL = `http://${IP.ipAddress}:5000/api/student/getStudentInformation`

interface StudentInformationProps{
    Name: string;
    CourseYear: string;
    StudentID: string;
    Email: string;
    Address: string;
    PhoneNumber: string;
    imgUrl: string;
}

export default function HomeUser({}) {
    const {username} = useUser();
    const router = useRouter();
    const [data, setData] = useState(username)
    const [res, setRes] = useState<StudentInformationProps[]>([]);
    const [studentData, setStudentData] = useState<StudentInformationProps | null>(null);
    const truncateEmail = (email: string, maxLength: number) => {
        if (email.length > maxLength) {
            const splitEmail = email.split("@");
            const usernamePart = splitEmail[0];
            const domainPart = splitEmail[1];
            return `${usernamePart}@${domainPart.slice(0, 1)}...`;
        }
        return email;
    }
     

    const getDataHandler = async () => {
        console.log('accessed');
        console.log(`Username: ${username}`)
        try {
            const response = await axios.post(getStudenInformationURL, {
              Username: data,
            });
            setRes(response.data);
            console.log('Fetched data: ', response.data);
            } catch(err) {
              console.log('error fetching data:', err);
            } finally { console.log('done fetching data') }
        }


    useEffect(() => {
        getDataHandler();
        
    }, [])



    const goToIndex = () => {
        // router.push('/homeShow');
        console.log('abc')
    }
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                    <ImageBackground
                        style={[styles.image1, {top: -6}]}
                        source={require("../../assets/images/background_banner.png")}
                    >
                    <FlatList
                        data = {res}
                        renderItem={({item}) => {
                            console.log("img url: "+item.imgUrl)
                            return (
                                <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                                    <View style = {{ alignItems: 'center', justifyContent: 'center', flex:1, top: 85}}>
                                        <Image
                                                style={styles.image2}
                                                source={{ uri: userImageMap[item.StudentID] }}
                                        />
                                        <View style = {{}} >
                                            <View style ={{ top: 13, justifyContent:'center', alignItems: 'center'}}>
                                                <Text style={styles.username}>{item.Name}</Text>
                                                <View style={styles.roleuser}>
                                                    <Text style={styles.txtrole}>Student</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                             
                        }}
                    />
                    </ImageBackground>
            </View>
            <View style={styles.container2}>
                <View style={styles.detail1}>
                    <View style={styles.tablettsv}>
                        <View style={styles.viewtxt}>
                            <Text style={styles.txt}>Name</Text>
                            <Text style={styles.txt}>Course</Text>
                            <Text style={styles.txt}>StudentID</Text>
                            <Text style={styles.txt}>Email</Text>
                            <Text style={styles.txt}>Address</Text>
                            <Text style={styles.txt}>Phone</Text>
                        </View>
                        <FlatList
                            data={res}
                            renderItem={({item}) => {
                                return (
                                <View style={[styles.viewttsv]}>
                                    <Text style={styles.ttsv}>{item.Name}</Text>
                                    <Text style={styles.ttsv}>{item.CourseYear}</Text>
                                    <Text style={styles.ttsv}>{item.StudentID}</Text>
                                    <Text style={[styles.ttsv, { flexWrap: 'wrap' }]}>{truncateEmail(item.Email, 10)}</Text>
                                    <Text style={styles.ttsv}>{item.Address}</Text>
                                    <Text style={styles.ttsv}>{item.PhoneNumber}</Text>
                                </View>
                                )
                            }}
                        >
                        </FlatList>
                    </View>
                </View>

                <View style={styles.detail2}>
                    <TouchableOpacity style={styles.update}>
                        <View style={styles.icon}>
                            <Image
                                style={styles.imageicon}
                                source={require("../../assets/images/pencil.png")}
                            />
                        </View>  
                        <Text style={styles.txticon}>Update Information</Text>
                    </TouchableOpacity>

                    {/* CODE FOR ACCOUNT SETTING HERE */}

                    <TouchableOpacity style={styles.setting}
                        onPress={() => router.navigate('/userSetting')}
                    >
                        <View style={styles.icon}>
                        <Image
                                style={styles.imageicon}
                                source={require(`../../assets/images/settings.png`)}
                            />
                        </View>
                        <Text style={styles.txticon}>Account setting</Text>
                    </TouchableOpacity>

                    {/* --------------------------------- */}

                </View>

                <View style={styles.detail3}>
                    <Text style={{color: '#b1b1b1'}}>feeling pressure?</Text>
                    <TouchableOpacity style={styles.leave}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#15539e'}}>Leave University</Text>
                    </TouchableOpacity>

                    {/* CODE FOR LOG-OUT BUTTON */}

                    <TouchableOpacity style={styles.logout}
                        onPress={goToIndex}
                    >
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#15539e'}}>Log out</Text>
                    </TouchableOpacity>

                    {/* --------------------------------- */}

                </View>
            </View>
        </View>

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
        alignItems: 'center',
        justifyContent: 'center',
    },

    container2: {
        flex: 2.8,
        width: '100%',
        alignItems: 'center',
    },

    image1: {
        width: "130%",
        height: "130%",
        justifyContent: 'center', // Canh giữa nội dung bên trong ảnh
        alignItems: 'center',
    },

    image2: {
        height: 90,
        width: 90,
        borderRadius: 100,
        borderWidth: 3,
        top: 7,
        borderColor: '#ffffff'
    },

    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    roleuser: {
        backgroundColor: 'white',
        width: 90,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    txtrole: {
        color: '#15539e',
        fontSize: 17,
        fontWeight: 'bold',
    },

    detail1: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    detail2: {
        flex: 0.6,
        backgroundColor: '#f4f4f4',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20
    },

    detail3:{
        flex: 1,
        backgroundColor: '#f4f4f4',
        width: '100%',
        alignItems: 'center',
        bottom: 20 
    },

    tablettsv:{
        backgroundColor: '#fff',
        width: '95%',
        borderRadius: 25,
        height: '80%',
        flexDirection: 'row',
    },

    update:{
        flex: 1,
        width: '100%',
        height: '65%',
        backgroundColor: '#fff',
        margin: 6,
        borderRadius: 25,
        marginBottom: 30,
        justifyContent: 'center',
    },

    setting: {
        flex: 1,
        width: '100%',
        height: '65%',
        backgroundColor: '#fff', 
        margin: 6,
        borderRadius: 25,
        marginBottom: 30,
        justifyContent: 'center',
    },

    leave:{
        width: '90%',
        height: '20%',
        backgroundColor: '#fff', 
        borderRadius: 30,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logout:{
        width: '40%',
        height: '20%',
        backgroundColor: '#fff', 
        borderRadius: 30,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewtxt:{
        flex: 1,
        marginLeft: 30,
        justifyContent: 'center',
    },

    viewttsv: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: 10,
        top: 10.5,
        width: '60%',
        fontSize: 14,
    },
    
    txt: {
        
        fontSize: 15,
        fontWeight: 'bold',
        color: '#555555',
        width: 100,
        marginVertical: 5
    },

    ttsv: {
        fontSize: 15,
        marginVertical: 5,
    },

    icon:{
        width: '20%',
        height: '38%',
        backgroundColor: '#15539e',
        marginLeft: 18,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txticon: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#555555',
        marginTop: 10,
        marginLeft: 18,
    },

    imageicon: {
        width: '60%',
        height: '60%',
    }
})  