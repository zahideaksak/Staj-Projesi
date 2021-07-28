import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default class Main extends Component {
    _openDrawerMenu = () => {
        this.props.navigation.toggleDrawer();
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.drawerMenu}>
                    <TouchableOpacity style={styles.drawerMenuButton} onPress={() => this._openDrawerMenu()}  >
                        <Icon name="menu-fold" size={40} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>
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
    drawerMenu: {
    },
    drawerMenuButton: {
        paddingLeft: 5,
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        color: '#fff'
    }
});



