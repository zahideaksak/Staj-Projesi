import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
    Button, Platform, ImageBackground
} from 'react-native';
import MyBackButton from "./MyBackButton";
import MyStatusBar from "./MyStatusBar";

export default class DrawerMenu extends Component {
    _navigateToScreen = (route) => {
        this.props.navigation.navigate(route);
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                        paddingBottom: 70
                    }}>
                        {
                            Platform.OS === 'ios' ? <MyStatusBar barStyle="dark-content"/> :
                                <StatusBar barStyle="dark-content"></StatusBar>
                        }
                        {
                            <View style={{flexDirection: 'row',}}>
                                <MyBackButton onPress={() => navigation.closeDrawer()}></MyBackButton>
                            </View>
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',

        alignContent: 'center',
        display: 'flex',
        height: '100%',
        backgroundColor: '#004B8C'
    },
    footerButtonText: {
        paddingLeft: 5,
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        color: '#fff'
    }
});
