import React, {Component} from 'react';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";

export default class FormPage extends Component {

    static navigationOptions = {
        title: 'Şikayet ve Öneri Formu'
    }

    render() {
        return (

                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.head}>
                            <Image
                                style={styles.gsbLogo}
                                source={require('../assets/gsblogo.png')}
                            />
                            <View style={styles.head2}>
                                <Text style={styles.headText}>T.C. GENÇLİK VE</Text>
                                <Text style={styles.headText}>SPOR BAKANLIĞI</Text>
                            </View>
                        </View>
                        <View style={styles.formArea}>
                            <Text style={styles.inputText}>Şikayetleriniz: </Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={'#545454'}
                            />
                            <Text style={styles.inputText}>Önerileriniz: </Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={'#545454'}
                            />
                            <TouchableOpacity>
                                <Text style={styles.buttonText}>GÖNDER</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formArea: {
        marginHorizontal: 20,
        marginVertical: 20,
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
        paddingHorizontal: 30,
        elevation: 2
    },
    input: {
        height: 150,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#f1f1f1',
        color: '#333',
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'justify'
    },
    inputText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333'
    },
    buttonText: {
        fontSize: 18,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        color: '#191919',
        textAlign: 'center',

    },
    head: {
        paddingVertical: 15,
        backgroundColor: '#fff',
        paddingLeft: 15,
        flexDirection: 'row',

    },
    head2: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20
    },
    gsbLogo: {
        width: 130,
        height: 130,
        paddingVertical: 5
    },
    headText: {
        color: '#dc0d15',
        fontSize: 25,
        fontWeight: 'bold',

    }
})
