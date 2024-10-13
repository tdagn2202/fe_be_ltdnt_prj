import { StatusBar } from 'expo-status-bar';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, Animated, FlatList } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import axios from 'axios';
import SheduleItem from '../../components/sheduleItem'
import ScheduleList from '@/components/scheduleList';

var IP = require('../../ipAddress')
const getScheduleURL = `http://${IP.ipAddress}:5000/api/student/getSchedule`
interface ScheduleItem {
    Course: string;
    Username: string;
    DayOfWeek:string;
  }

export default function Home() {
    const [res, setRes] = useState<ScheduleItem[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity for background
    const fadeAnim2 = useRef (new Animated.Value(1)).current; //)
    const [data, setData] = useState('B2203551')
    useEffect(() => {
        if (modalVisible) {
            Animated.timing(fadeAnim, {
                toValue: 1,  // fade in
                duration: 1300,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(fadeAnim2, {
                toValue: 0,  // fade out
                duration: 3000,
                useNativeDriver: true
            }).start();
        }
    }, [modalVisible]);

    const getDataHandler = async () => {
        console.log('accessed');
        
        axios.post(getScheduleURL, {
          Username: data,
        }).then((response) => {
          setRes(response.data);
          console.log(response.data);
        }).catch((err) => {
          console.log('error fetching data:', err);
        }).finally(() => {console.log('done fetching data')})
      }

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={[styles.img, {bottom: 4}]}>
                    <Image
                        style={styles.image1}
                        source={require("../../assets/images/meliodas.png")}
                    />
                </View>
                <View style={styles.txt}>
                    <Text style={{ right:10, fontSize: 20, fontWeight: 'bold', color: '#3d70af' }}>Welcome</Text>
                    <Text style={{ right:10, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Minh Man</Text>
                </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.space}></View>
                <View style={styles.homedetail}>
                    <View style={styles.schedule}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5c5c5c', marginVertical: 10, marginLeft: 12 }}>Schedule</Text>

                        <ScheduleList />

                    </View>

                    <View style={styles.map}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5c5c5c', marginBottom: 10, marginLeft: 12, bottom: 65 }}>School Map</Text>
                        <View style={styles.spacemap}></View>
                    </View>
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
        backgroundColor: '#f4f4f4',
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    container2: {
        flex: 5,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
    img: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f4f4f4',
        borderRadius: 20,
        overflow: 'hidden',
    },
    txt: {
        flex: 2,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        marginTop: 30,
    },
    image1: {
        width: "55%",
        height: "50%",
        marginTop: 55,
        marginLeft: 30,
        borderRadius: 100,
    },
    space: {
        flex: 1,
        backgroundColor: '#15539e',
        width: '95%',
        borderRadius: 30,
    },
    homedetail: {
        flex: 3.5,
        width: '100%',
    },
    scroll: {
        height: 150,
        width: 130,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 10,
    },
    inscroll: {
        height: 40,
        width: '90%',
        backgroundColor: '#15539e',
        borderRadius: 17,
        marginTop: 7,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    schedule: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    spacemap: {
        backgroundColor: '#fff',
        width: '95%',
        borderRadius: 30,
        height: '65%',
        marginLeft: 10,
        bottom: 65,
    },
    inscrollText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inscrollBadge: {
        width: 40,
        height: 27,
        backgroundColor: '#fff',
        borderRadius: 10,
        right: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInBadge: {
        color: '#12469a',
        fontWeight: '900',
        fontSize: 12,
    },
    // New styles for the modal
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Align the modal content at the bottom
    },
    modalBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
    },
    modalContent: {
        height: '45%', // Adjust the height as needed
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 40,
        left: 27,
        bottom: 15
    },
    modalLessionBadge: {
        height: 30,
        width: 90,
        backgroundColor: '#12469a',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        left: 25,
        bottom: 20,
        flexDirection: 'row'
    }, 
    modalCancelButton : {
        backgroundColor: '#12469a',
        borderRadius: 15,
        height: 30,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});
