import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

 const Search =({navigation})=> {
    state = {}

        return (
            <View>
                <Text>Component Search</Text>
                 <TouchableOpacity onPress={() => navigation.navigate('Screen_Detail')}>

                    <Text> go to Detail</Text>
                </TouchableOpacity>
            </View>
        );
}
export default Search;