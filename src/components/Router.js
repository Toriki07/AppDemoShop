import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

export const MainStack = StackNavigator({
    Screen_Main: {
        screen: Main,
        navigationOptions: {
            title: 'Home'
        }
    },
    Screen_Authentication: {
        screen: Authentication,
        navigationOptions: {
            title: 'Authentication'
        }
    },
    Screen_ChangeInfo: {
        screen: ChangeInfo,
        navigationOptions: {
            title: 'Change Info'
        }
    },
    Screen_OrderHistory: {
        screen: OrderHistory,
        navigationOptions: {
            title: 'Order History'
        }
    }
})