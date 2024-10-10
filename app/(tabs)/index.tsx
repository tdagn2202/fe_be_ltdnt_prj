import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';

export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.img}>
                    <Image
                        style={styles.image1}
                        source={require("../../assets/images/meliodas.png")}
                    />
                </View>
                <View style={styles.txt}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3d70af' }}>Welcome</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Minh Man</Text>
                </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.space}></View>
                <View style={styles.homedetail}>
                    <View style={styles.schedule}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5c5c5c', marginVertical: 10, marginLeft: 12 }}>Schedule</Text>
                        <ScrollView horizontal={true}>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <View style={styles.scroll}>
                                    <View style={styles.inscroll}>
                                        <View style={styles.inscrollBadge}>
                                            <Text style={styles.textInBadge}>Wed</Text>
                                        </View>
                                        <Text style={styles.inscrollText}>CT110H</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            {/* Modal */}
                            <Modal
                                visible={modalVisible}
                                animationType='slide'
                                transparent={true} // To make background semi-transparent
                                onRequestClose={() => {
                                    setModalVisible(false);
                                }}
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        <Text style={styles.modalTitle}>Schedule Details</Text>
                                        <Button title="Close Modal" onPress={() => setModalVisible(false)} />
                                    </View>
                                </View>
                            </Modal>

                            {/* Add more scroll items if needed */}
                            <View style={styles.scroll}>
                                <View style={styles.inscroll}></View>
                            </View>
                            <View style={styles.scroll}>
                                <View style={styles.inscroll}></View>
                            </View>
                            <View style={styles.scroll}>
                                <View style={styles.inscroll}></View>
                            </View>
                        </ScrollView>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        height: '40%', // Adjust the height as needed
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

