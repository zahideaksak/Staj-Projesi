import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";

export default class Card extends Component {
    render() {
        return (
            <View style={styles.cardContainer}>
                <ScrollView>
                    <TouchableOpacity style={styles.cardButton}>
                        <Image
                            style={styles.cardImage}
                            source={require('../assets/FoodImages/images.png')}

                        />
                        <View style={styles.textArea}>
                            <Text style={styles.cardText1}>29.07.2021</Text>
                            <Text style={styles.cardText2}>- Yemek İsimleri</Text>
                            <Text style={styles.cardText2}>- Yemek İsimleri</Text>
                            <Text style={styles.cardText2}>- Yemek İsimleri</Text>
                            <Text style={styles.cardText2}>- Yemek İsimleri</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
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
        elevation: 2

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
        fontSize: 20,
        marginVertical: 15,
        marginHorizontal: 60
    },
    cardText2: {
        fontSize: 15,
        marginHorizontal: 20
    }
})
