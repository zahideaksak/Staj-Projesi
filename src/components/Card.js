import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default class Card extends Component {
    static navigationOptions = {
        title: 'Yemek Listesi'
    };

    render() {
        return (
            <View style={styles.cardContainer}>
                    <TouchableOpacity style={styles.cardButton}>
                        <Image
                            style={styles.cardImage}
                            source={require('../assets/FoodImages/images.png')}

                        />
                        <View style={styles.textArea}>
                            <Text style={styles.cardText1}>Menü</Text>
                            <Text style={styles.cardText2}>- Yemek İsimleri</Text>
                            <Text style={styles.cardText2}>- Yemek İsimleri</Text>
                            <Text style={styles.cardText2}>- Yemek İsimleri</Text>
                            <Text style={styles.cardText2}>- Yemek İsimleri</Text>
                        </View>
                    </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
        elevation: 2,
        paddingVertical: 20

    },
    cardImage: {
        width: 150,
        height: 150,
        marginVertical: 10
    },

    cardButton: {
        flexDirection: 'row'
    },
    cardText1: {
        fontWeight: 'bold',
        fontSize: 23,
        marginVertical: 5,
        marginBottom: 18,
        marginHorizontal: 20
    },
    cardText2: {
        fontSize: 15,
        marginHorizontal: 20
    }
})
