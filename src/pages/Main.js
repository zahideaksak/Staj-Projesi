import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Image, FlatList} from "react-native";
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

    state = {
        day: 0,
        dataSource: [
            {name1: 'Yayla Çorbası', name2: 'Lahmacun', name3: 'Kadayıf', day: '9'},
            {name1: 'Mercimek Çorbası', name2: 'Köfte Patates', name3: 'Sütlaç', day: '10'},
        ]
    };

    _UserItem = ({item, index}) => {
        console.log("ne geldi item", item)
        return (
            <View style={styles.cardContainer}>
                {

                    <TouchableOpacity style={styles.cardButton}>
                        <Image
                            style={styles.cardImage}
                            source={require('../assets/FoodImages/images.png')}

                        />
                        <View style={styles.textArea}>{
                            Object.values(item).map((item, index) => {
                                return (

                                    <Text style={styles.cardText2}> - {item}</Text>
                                )
                            })

                        }</View>
                    </TouchableOpacity>
                }
            </View>
        );
    };

    render() {
        const {navigation} = this.props;
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
                    style={styles.calendar}
                    onDayPress={(day) => this.setState({day: day})}
                    theme={{
                        arrowColor: '#dc0d15',
                        todayTextColor: '#dc0d15',
                    }}
                />
                <FlatList
                    style={{marginTop: 10, marginBottom: 20}}
                    renderItem={this._UserItem}
                    keyExtractor={item => item}
                    data={this.state.dataSource}
                />

            </View>
        );
    }

}
const styles = StyleSheet.create({
        container: {
            flex: 1,
        }
        ,
        drawerMenuButton: {
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingHorizontal: 5,
            flexDirection: 'row',
            elevation: 3
        }
        ,
        headerText: {
            paddingHorizontal: 40,
            paddingVertical: 5,
            fontWeight: 'bold',
            fontSize: 20,
            color: '#333'
        }
        ,
        calendar: {
            backgroundColor: '#fff',
            borderRadius: 10,
            marginHorizontal: 10,
            marginTop: 5,
            elevation: 2,

        }
        ,
        head: {
            paddingVertical: 15,
            backgroundColor: '#fff',
            paddingLeft: 15,
            flexDirection: 'row',

        }
        ,
        head2: {
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 20
        }
        ,
        gsbLogo: {
            width: 130,
            height: 130,
            paddingVertical: 5
        }
        ,
        headText: {
            color: '#dc0d15',
            fontSize: 25,
            fontWeight: 'bold',

        },
        cardContainer: {
            backgroundColor: '#fff',
            borderRadius: 10,
            marginHorizontal: 10,
            marginBottom: 5,
            elevation: 2,
            paddingVertical: 14

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
            marginHorizontal: 20,
            marginVertical: 5,
            fontWeight: 'bold',
            color: '#333'

        },
        textArea: {
            marginVertical: 30,
            marginHorizontal: 20
        }

    }
);



