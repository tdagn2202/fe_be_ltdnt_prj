import { router, useNavigation, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useNavigationState, useRoute } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';



export default function HomeUser({}) {
    const router = useRouter();

    const goToIndex = () => {
        router.push('/homeShow');
    }
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <ImageBackground
                    style={[styles.image1, {top: -6}]}
                    source={require("../../assets/images/background_banner.png")}
                >
                  <Image
                        style={styles.image2}
                        source={require("../../assets/images/meliodas.png")}
                    />
                  <View style = {{bottom: 10}} >
                    
                    <Text style={styles.username}>Minh Man</Text>
                    <View style={styles.roleuser}>
                        <Text style={styles.txtrole}>Student</Text>
                    </View>
                  </View>
                </ImageBackground>
            </View>
            <View style={styles.container2}>
                <View style={styles.detail1}>
                    <View style={styles.tablettsv}>
                        <View style={styles.viewtxt}>
                            <Text style={styles.txt}>Name</Text>
                            <Text style={styles.txt}>Course</Text>
                            <Text style={styles.txt}>Student code</Text>
                            <Text style={styles.txt}>Email</Text>
                            <Text style={styles.txt}>Address</Text>
                            <Text style={styles.txt}>Phone</Text>
                        </View>
                        <View style={styles.viewttsv}>
                            <Text style={styles.ttsv}>Truong Minh Man</Text>
                            <Text style={styles.ttsv}>K48</Text>
                            <Text style={styles.ttsv}>B2203565</Text>
                            <Text style={styles.ttsv}>manb2203565@student...</Text>
                            <Text style={styles.ttsv}>Dam Doi, Ca Mau</Text>
                            <Text style={styles.ttsv}>0912404...</Text>

                        </View>
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
                    <TouchableOpacity style={styles.setting}
                        onPress={() => router.navigate('/userSetting')}
                    >
                        <View style={styles.icon}>
                        <Image
                                style={styles.imageicon}
                                source={require("../../assets/images/settings.png")}
                            />
                        </View>
                        <Text style={styles.txticon}>Account setting</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.detail3}>
                    <Text style={{color: '#b1b1b1'}}>feeling pressure?</Text>
                    <TouchableOpacity style={styles.leave}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#15539e'}}>Leave University</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logout}
                        onPress={goToIndex}
                    >
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#15539e'}}>Log out</Text>
                    </TouchableOpacity>
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
        width: "17.5%",
        height: "31.5%",
        borderRadius: 100,
        marginTop: 50,

    },

    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 17
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
        marginLeft: 40,
        justifyContent: 'center',
    },

    viewttsv: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: 20,
    },
    
    txt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#555555',
        marginVertical: 5,
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