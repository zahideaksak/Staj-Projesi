import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
} from "react-native";
import MyBackButton from "../components/MyBackButton";
import LoginForm from "../screen/LoginForm";
import Main from "./Main";

export default class RegisterForm extends Component {

    state = {
        name: '',
        tc: '',
        password: '',

    };

    render() {
        return (
            <KeyboardAvoidingView>
                <View style={styles.container}>

                    <View style={styles.headBackground}/>
                    <View style={{backgroundColor: '#fff', bottom: '2%'}}>
                        <View style={{justifyContent: 'flex-start'}}>
                            <MyBackButton
                                onPress={() => this.props.navigation.navigate('LoginForm')}></MyBackButton>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.logo1}>KAYIT OL</Text>

                    </View>
                    <ScrollView>
                        <View style={styles.loginArea}>

                            <Text style={styles.loginAreaTitle}>Yurt Öğrenci Girişi</Text>

                            <TextInput style={styles.input}
                                       placeholder="Ad Soyad"
                                       onChangeText={text => this.setState({name: text})}
                                       value={this.state.name}
                                       returnKeyType={"next"}

                            />
                            <TextInput style={styles.input}
                                       placeholder="Tc Kimlik No"
                                       onChangeText={text => this.setState({tc: text})}
                                       value={this.state.tc}
                                       returnKeyType={"next"}

                            />
                            <TextInput style={styles.input}
                                       placeholder="Şifre"
                                       onChangeText={text => this.setState({password: text})}
                                       value={this.state.password}
                                       returnKeyType={"go"}

                            />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                                <Text style={styles.signUpText}>Kayıt Ol</Text>
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
    logo1: {
        textAlign: 'center',
        fontSize: 40,

        color: '#f2f2f2',
        marginBottom: 15
    },
    logo2: {
        textAlign: 'center',
        fontSize: 17,
        color: '#e9e9e9',
        marginBottom: 15
    },
    logoDescription: {
        textAlign: 'center',
        color: '#e9e9e9',
        fontSize: 17,
    },
    loginArea: {
        marginHorizontal: 50,
        marginVertical: 50,
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
        paddingHorizontal: 50,
        elevation: 2
    },
    input: {
        height: 40,
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
        marginBottom: 15
    },
    loginAreaDescription: {
        fontSize: 11,
        color: '#7e868f',
        marginVertical: 10,
        textAlign: 'center'
    },
    signUpText: {

        fontSize: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        color: '#191919',
        textAlign: 'center',

    },
    inputText: {
        marginBottom: 5
    }
});


