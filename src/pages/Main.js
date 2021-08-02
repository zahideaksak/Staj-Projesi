import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Image} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Card from '../components/Card'
import {Calendar, LocaleConfig} from "react-native-calendars";



LocaleConfig.locales['tr'] = {
    monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    monthNamesShort: ["Ock", "Şbt", "Mrt", "Nis", "Mys", "Hzrn", "Tmmz", "Ags", "Eyll", "Ekm", "Ksm", "Arlk"],
    today: "Bugün",
    dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
    dayNamesShort: ["Pzr", "Pzt", "Sal", "Çrş", "Perş", "Cum", "Cmt"]
}
LocaleConfig.defaultLocale = "tr"

export default class Main extends Component {
    _openDrawerMenu = () => {
        this.props.navigation.toggleDrawer();
    };
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.drawerMenu}>
                    <TouchableOpacity style={styles.drawerMenuButton} onPress={() => this._openDrawerMenu()}>
                        <Icon name="menu-fold" size={35} color='#333'/>
                        <Text style={styles.headerText}>Yemek Listesi</Text>
                    </TouchableOpacity>
                </View>
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
                <Calendar
                    firstDay={1}
                    style={styles.calendar}/>
                <Card/>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerMenuButton: {
        backgroundColor: '#e9e9e9',
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: 'row'
    },
    headerText: {
        paddingHorizontal: 40,
        paddingVertical: 5,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333'
    },
    calendar: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
        elevation: 2

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

});



