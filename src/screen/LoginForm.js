import React, {Component} from "react";
import {
    TextInput,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Text,
    ScrollView,
    TouchableOpacity,
    Image, Alert
} from "react-native";
import SQLite from 'react-native-sqlite-storage';

export default class LoginForm extends Component {

    state = {
        name: "Admin",
        password: '1',
        userName: '',
        password2: '',
    };
    openHome = (navigation) => {
        if (this.state.name === this.state.userName && this.state.password === this.state.password2) {
            navigation.navigate('app')
        } else {
            Alert.alert(
                "Hatalı Giriş",
                "Kullanıcı Adı Veya Şifre Yanlış",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {text: "OK", onPress: () => console.log("OK Pressed")}
                ]
            );
        }

    };

    render() {
        const {navigation} = this.props;
        return (
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <View style={styles.headBackground}/>

                    <View style={{backgroundColor: '#fff', bottom: '2%', borderRadius: 75, marginBottom: 15}}>
                        <View style={{justifyContent: 'center'}}>
                            <Image
                                style={styles.gsbLogo}
                                source={require('../assets/gsblogo.png')}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.logo2}>KREDİ VE YURTLAR GENEL MÜDÜRLÜĞÜ</Text>
                        <Text style={styles.logoDescription}>Yurt Yemek Listesi</Text>
                    </View>

                    <ScrollView>
                        <View style={styles.loginArea}>
                            <Text style={styles.loginAreaTitle}>Yurt Öğrenci Girişi</Text>

                            <TextInput style={styles.input}
                                       placeholder="Tc Kimlik No"
                                       onChangeText={text => this.setState({
                                           userName: text
                                       })}
                                       value={this.state.userName}
                                       returnKeyType={"next"}

                            />
                            <TextInput style={styles.input}
                                       placeholder="Şifre"
                                       onChangeText={text => this.setState({
                                           password2: text
                                       })}
                                       value={this.state.password2}
                                       returnKeyType={"go"}
                                       secureTextEntry
                            />
                            <TouchableOpacity onPress={() => this.openHome(navigation)}>
                                <Text style={styles.signUpText}>Giriş Yap</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 80
    },
    headBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 450,
        width: '100%',
        backgroundColor: '#dc0d15'
    },
    logo2: {
        textAlign: 'center',
        fontSize: 19,
        color: '#fff',
        marginBottom: 15,

    },
    logoDescription: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
    loginArea: {
        marginHorizontal: 50,
        marginVertical: 40,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        paddingVertical: 50,
        paddingHorizontal: 40,
        elevation: 2
    },
    input: {
        height: 50,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#f1f1f1',
        color: '#999',
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '600',

    },
    loginAreaTitle: {
        fontSize: 25,
        textAlign: 'center',
        color: '#191919',
        marginBottom: 18
    },
    signUpText: {
        fontSize: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        color: '#191919',
        textAlign: 'center'
    },
    gsbLogo: {
        width: 140,
        height: 140,
    },
});


