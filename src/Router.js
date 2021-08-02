import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from "react-navigation-drawer";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Main from "./pages/Main";
import DrawerMenu from "./components/DrawerMenu";
import RegisterForm from "./pages/RegisterForm";
import FormPage from "./pages/FormPage";

const AuthNavigator = createStackNavigator({
    Login: Login,
}, {
    headerMode: "none"
});
const AppNavigator = createStackNavigator({
    Main: Main,
    RegisterForm: RegisterForm,
    FormPage: FormPage,
}, {
    mode: 'modal',
});
const DrawerNavigator = createDrawerNavigator({
    Home: AppNavigator,
}, {
    contentComponent:DrawerMenu
});
const TabNavigator = createBottomTabNavigator({
    Main: Main,
}, {
    tabBarOptions: {
        activeTintColor: '#2E6095',
        inactiveTintColor: '#974920',
        style: {
            backgroundColor: '#F2F2F2'
        }
    }
});

const MainNavigator = createSwitchNavigator({
    auth: AuthNavigator,
    app: DrawerNavigator,

}, {
    initialRouteName: 'auth'
});


export default createAppContainer(MainNavigator);
