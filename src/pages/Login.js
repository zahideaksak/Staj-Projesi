import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Text,
    ScrollView,
    Platform,
    TouchableOpacity

} from 'react-native';
import LoginForm from '../screen/LoginForm';
import RegisterForm from './RegisterForm';

export default class Login extends Component {
    state = {
        isLogin: true,
        isShowLaunch: false,
        showSlider:false,
    };
    _onRegister = () => {
        this.setState({
            isLogin: false,
        });

    };
    _onLogin = () => {
        this.setState({
            isLogin: true,
        });
    };
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.isShowLaunch == false &&
                    <View>
                        <View/>
                        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "position" : 'null'}>
                            <ScrollView>
                                {
                                    this.state.isLogin == true ?
                                        <View  style={styles.loginArea}>
                                            <LoginForm navigation={this.props.navigation}></LoginForm>
                                        </View>         :
                                        <View style={styles.loginArea}>
                                            <RegisterForm navigation={this.props.navigation}></RegisterForm>
                                        </View>

                                }
                                {
                                    this.state.isLogin == true ?
                                        <View style={styles.signUpArea}>
                                            <TouchableOpacity onPress={() => this._onRegister()}>
                                                <Text style={styles.signUpText}>Hesap Oluştur</Text>
                                            </TouchableOpacity>
                                        </View> :
                                        <View style={styles.signUpArea2}>
                                            <TouchableOpacity onPress={() => this._onLogin()}>
                                                <Text style={styles.signUpText}>Giriş Yap</Text>
                                            </TouchableOpacity>
                                        </View>
                                }
                                {
                                    this.state.isShowLaunch == false &&
                                    <View style={{alignItems:'center',position:'absolute',bottom:10,alignSelf:'center'}}>
                                        <Text style={{fontSize:12,color:'#999'}}>Powered By Hey Teknoloji</Text>
                                    </View>
                                }

                            </ScrollView>

                        </KeyboardAvoidingView>

                    </View>
                }

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // paddingVertical: 40
    },

    /*loginArea: {
        marginHorizontal: 40,
        marginTop: 120,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
    },*/
    signUpArea: {
        alignItems: 'center',
        bottom:50
    },
    signUpArea2: {
        alignItems: 'center',
        bottom:10,
        marginBottom:30
    },
    signUpDescription: {
        color: '#999',
        fontSize: 15,
    },
    signUpText: {
        color: '#666',
        fontSize: 15,
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '40%',
        backgroundColor: 'blue',
    },
    image: {
        //width: 120,
        //height: 120,
        marginTop: 32,
        marginBottom: 18,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 20,
        fontSize: 15,
        marginTop: '20%',
    },
    title: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
