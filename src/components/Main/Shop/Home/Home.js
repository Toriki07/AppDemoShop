import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import Header from '../Search/Header';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: []
        };
    }
    componentDidMount() {
        fetch('http://localhost//api/').then(res => res.json()).then(resJSON => {
            const { type } = resJSON;
            this.setState({ types: type });
        });
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
        header: (headerProps) => (
            <Header navigation={navigation} />
        )
    })
    render() {
        const { types } = this.state;
        return (
            <ScrollView style={{ flex: 1 }}>
                <Collection />
                <Category navigation={this.props.navigation} types={types} />
                <TopProduct />
            </ScrollView>
        );
    }
}