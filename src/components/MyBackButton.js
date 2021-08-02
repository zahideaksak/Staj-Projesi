import React, { Component } from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export default class MyBackButton extends Component {
    render() {
        return (
            <View style={styles.headerBackButton}>
                <TouchableOpacity {...this.props}
                                  style={styles.backButton}>
                    <Icon name="left" size={40} color='#fff'/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerBackButton:{

    },
    backButton: {
        marginLeft: '2%',


    },
});
