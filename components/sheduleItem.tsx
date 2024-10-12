import { StyleSheet, Text, View, Modal, Animated, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';


interface ScheduleItemProps {
    scheduleItem: {
        CourseName: string;
        Username: string;
        DayOfWeek:string;
        StartTime: string;
        EndTime: string;
        Room: string;
        CourseID: string
    }
  }

const sheduleItem = ({scheduleItem} : ScheduleItemProps ) => {
    const [modalVisible, setModalVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity for background
    const fadeAnim2 = useRef (new Animated.Value(1)).current; //)

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

   

  return (
    <ScrollView horizontal = {true}>
        
         <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.scroll}>
                <View style={styles.inscroll}>
                    <View style={styles.inscrollBadge}>
                        <Text style={styles.textInBadge}>{scheduleItem.DayOfWeek}</Text>
                    </View>
                    <Text style={styles.inscrollText}>{scheduleItem.CourseID}</Text>
                </View>
            </View>
        </TouchableOpacity>

            <Modal
            visible={modalVisible}
            animationType='slide'
            transparent={true} 
            onRequestClose={() => {
                setModalVisible(false);
            }}
        >
            {/* Animated background for fade effect */}
            <Animated.View style={[styles.modalBackground, { opacity: fadeAnim }]} />
            
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Chi tiết thời khóa biểu</Text>
                    
                    <View style ={{top: -9}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {[styles.modalLessionBadge, {marginTop: 7, width: 100}]}>
                                <AntDesign name="book" size={17} color="white" style ={{right: 2}} />
                                <Text style= {{color: 'white', fontWeight: 'bold', left: 2}}>Môn học:</Text>
                            </View>
                            <View>
                                <Text style ={{bottom: 7, left: 40, fontSize: 15}}>
                                    {scheduleItem.CourseName}
                                </Text>
                            </View>
                        </View>
                        
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {[styles.modalLessionBadge, {marginTop: 7, width: 80}]}>
                                <MaterialCommunityIcons name="calendar-week-begin" size={17} color="white" style ={{right: 3}} />
                                <Text style= {{color: 'white', fontWeight: 'bold', left: 2}}>Ngày:</Text>
                            </View>
                            <View>
                                <Text style ={{bottom: 7, left: 40, fontSize: 15}}>
                                    {scheduleItem.DayOfWeek}
                                </Text>
                            </View>
                        </View>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {[styles.modalLessionBadge, {marginTop: 7, width: 100}]}>
                                <Fontisto name="clock" size={15} color="white" style ={{right: 3}}/>
                                <Text style= {{color: 'white', fontWeight: 'bold', left: 2}}>Bắt đầu: </Text>
                            </View>
                            <View>
                                <Text style ={{bottom: 7, left: 40, fontSize: 15}}>
                                    {scheduleItem.StartTime}
                                </Text>
                            </View>
                        </View>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {[styles.modalLessionBadge, {marginTop: 7, width: 100}]}>
                                <Fontisto name="clock" size={15} color="white" style ={{right: 3}}/>
                                <Text style= {{color: 'white', fontWeight: 'bold', left: 2}}>Kết thúc:</Text>
                            </View>
                            <View>
                                <Text style ={{bottom: 7, left: 40, fontSize: 15}}>
                                    {scheduleItem.EndTime}
                                </Text>
                            </View>
                        </View>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {[styles.modalLessionBadge, {marginTop: 7, width: 90}]}>
                                <Entypo name="location-pin" size={20} color="white" style ={{right: 5}}/>
                                <Text style= {{color: 'white', fontWeight: 'bold', left: 2}}>Phòng:</Text>
                            </View>
                            <View>
                                <Text style ={{bottom: 7, left: 40, fontSize: 15}}>
                                    {scheduleItem.Room}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                    >
                        <View style ={{alignItems: 'center'}}>    
                            <View style = {styles.modalCancelButton}>
                                <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                                    Trở về
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </ScrollView>
  )
}

export default sheduleItem

const styles = StyleSheet.create({
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
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Align the modal content at the bottom
    },
    modalCancelButton : {
        backgroundColor: '#12469a',
        borderRadius: 15,
        height: 30,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,   
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
    inscrollText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})