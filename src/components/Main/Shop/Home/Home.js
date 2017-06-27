import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import Header from '../Search/Header';
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
                {/*<Header navigation={navigation}/>*/}
            </View>
        );
    }
}