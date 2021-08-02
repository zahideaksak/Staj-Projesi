import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
    Button, Platform, ImageBackground
} from 'react-native';
import MyBackButton from "./MyBackButton";
import MyStatusBar from "./MyStatusBar";
import Main from "../pages/Main";
import Icon from 'react-native-vector-icons/AntDesign';
import FormPage from "../pages/FormPage";

export default class DrawerMenu extends Component {
    _navigateToScreen = (route) => {
        this.props.navigation.navigate(route);
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                        paddingBottom: 70,
                    }}>
                        {
                            Platform.OS === 'ios' ? <MyStatusBar barStyle="dark-content"/> :
                                <StatusBar barStyle="dark-content"></StatusBar>
                        }
                        {
                            <View style={styles.headArea}>
                                <MyBackButton onPress={() => navigation.closeDrawer()}></MyBackButton>
                                <Icon style={styles.icon} name="user" size={100}/>
                                <Text style={styles.tcText}>Zahide Aksak</Text>
                            </View>
                        }

                        <TouchableOpacity style={styles.formButton}
                                          onPress={() => this.props.navigation.navigate('FormPage')}>
                            <Icon  name="form" size={25}/>
                            <Text style={styles.formButtonText}>Şikayet ve Öneri</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signOutButton}
                                          onPress={() => this.props.navigation.navigate('auth')}>
                            <Icon style={styles.logOutIcon} name="logout" size={25}/>
                            <Text style={styles.signOutButtonText}>Çıkış Yap</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        display: 'flex',
        height: '100%',
        backgroundColor: '#fff',
    },
    footerButtonText: {
        paddingLeft: 5,
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        color: '#fff',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    tcText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        paddingTop: 5
    },
    formButton: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        elevation: 3,
        marginVertical: 10,
        flexDirection: 'row',
    },
    signOutButton: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        textAlign: 'center'
    },
    formButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 18
    },
    signOutButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 18
    },
    headArea: {
        backgroundColor: '#dc0d15',
        justifyContent: 'center',
        paddingVertical: 30
    },
    icon: {
        paddingHorizontal: 20,
        color: '#fff',
        paddingTop: 30,
        textAlign: 'center'
    },
    logOutIcon: {
        justifyContent: 'center'
    }
});
