import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeAccount({}) {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#555555', marginTop: 90, marginLeft: 25}}>Account center</Text>
            </View>

            <View style={styles.container2}>
                <View style={styles.img}>
                    <Image
                        style={styles.image1}
                        source={require("../assets/images/react-logo.png")}
                    />
                </View>
                <View style={styles.txt}>
                    <Text style={styles.username}>Minh Man</Text>
                    <View style={styles.roleuser}>
                        <Text style={styles.txtrole}>Student</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container3}>
                <TouchableOpacity style={styles.option} onPress={() => console.log('Change name button hitted')}>
                    <View style={styles.viewicon}>
                        <View style={styles.icon}>
                            <Image
                                style={styles.imageicon}
                                source={require("../assets/images/settings.png")}
                            />
                        </View>
                    </View>
                    <View style={styles.viewtxt}>
                        <Text style={styles.txticon}>Change name</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => console.log('Change avatar button hitted')}>
                    <View style={styles.viewicon}>
                        <View style={styles.icon}>
                            <Image
                                style={styles.imageicon}
                                source={require("../assets/images/settings.png")}
                            />
                        </View>
                    </View>
                    <View style={styles.viewtxt}>
                        <Text style={styles.txticon}>Change avatar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <View style={styles.viewicon}>
                        <View style={styles.icon}>
                            <Image
                                style={styles.imageicon}
                                source={require("../assets/images/settings.png")}
                            />
                        </View>
                    </View>

                    {/* CODE FOR CHANGE PASSWORD HERE */}

                    <TouchableOpacity style={styles.viewtxt}
                        onPress={() => router.navigate('/changePass')}
                    >
                        <Text style={styles.txticon}>Change password</Text>
                    </TouchableOpacity>

                    {/* --------------------------------- */}
                    
                </TouchableOpacity>
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
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },

    container3: {
        flex: 4,
        width: '100%',
        alignItems: 'center',
        marginBottom: 50,
    },

    img: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f4f4f4',
        borderRadius: 20,
        overflow: 'hidden',
    },

    txt: {
        flex: 2.5,
        backgroundColor: '#f4f4f4',
        marginTop: 50,
        marginRight: 10
    },

    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#555555',
    },

    roleuser: {
        backgroundColor: '#15539e',
        width: 90,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    txtrole: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },

    image1: {
        width: "65%",
        height: "53%",
        marginLeft: 25,
        borderRadius: 100,
        marginTop: 35,
    },

    option: {
        width: '92%',
        height: '9%',
        backgroundColor: '#fff',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        
        },

    viewicon:{
        flex: 1,
        
    },

    icon: {
        width: '70%',
        height: '80%',
        backgroundColor: '#15539e',
        marginLeft: 5,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewtxt: {
        flex: 5,
    },

    txticon: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#555555',
        marginLeft: 0,
    },

    imageicon: {
        width: '55%',
        height: '60%',
    }
}
)