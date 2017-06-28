import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import Header from '../Search/Header';
import Collection from './Collection';
import Category from './Category';

export default class Home extends Component {
static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
        header: (headerProps) => (
            <Header navigation={navigation} />
        )
    })    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Collection/>
                <Category/>
            </View>
        );
    }
}