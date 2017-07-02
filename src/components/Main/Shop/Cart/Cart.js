import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

 const Cart =({navigation})=> {
    state = {}

        return (
            <View>
                <Text>Component Cart</Text>
                 <TouchableOpacity onPress={() => navigation.navigate('Screen_Detail')}>

                    <Text> go to Detail</Text>
                </TouchableOpacity>
            </View>
        );
}
export default Cart