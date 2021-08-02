import React, {Component} from "react";
import {TextInput, View, StyleSheet, KeyboardAvoidingView, Text, ScrollView, TouchableOpacity} from "react-native";





export default class LoginForm extends Component {
    state = {
        userName: '',
        password: ''
    };
    openHome = (navigation) => {
        navigation.navigate('app')
    };



    render() {
        const {navigation} = this.props;
        return (
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <View style={styles.headBackground}/>
                    <View>
                        <Text style={styles.logo1}>GSB</Text>
                        <Text style={styles.logo2}>KREDİ VE YURTLAR GENEL MÜDÜRLÜĞÜ</Text>
                        <Text style={styles.logoDescription}>Yurt Yemek Listesi</Text>
                    </View>

                    <ScrollView>
                        <View style={styles.loginArea}>
                            <Text style={styles.loginAreaTitle}>Yurt Öğrenci Girişi</Text>

                            <TextInput style={styles.input}
                                       placeholder="Tc Kimlik No"
                                       onChangeText={text => this.setState({userName: text})}
                                       value={this.state.userName}
                                       keyboardType={"numeric"}
                                       returnKeyType={"İleri"}

                            />
                            <TextInput style={styles.input}
                                       placeholder="Şifre"
                                       onChangeText={text => this.setState({password: text})}
                                       value={this.state.password}
                                       returnKeyType={"Git"}

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
    logo1: {
        textAlign: 'center',
        fontSize: 60,
        fontWeight: 'bold',
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
        marginBottom: 15
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
});


