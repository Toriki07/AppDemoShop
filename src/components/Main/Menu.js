import React, { Component } from 'react';
import { View, Text , TouchableOpacity,} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';


export default class Menu extends Component {
    state = {}
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#2EFEF7' }}>
                <View >
                    <Text> TopBar </Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#FF8000' }}
                    onPress={() => { this.props.navigation.navigate('Screen_Authentication') }
                    }
                >
                    <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FF8000' }}
                    onPress={() => { this.props.navigation.navigate('Screen_ChangeInfo') }
                    }
                >
                    <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>Go to Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FF8000' }}
                    onPress={() => { this.props.navigation.navigate('Screen_OrderHistory') }
                    }
                >
                    <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>Go to Order History</Text>
                </TouchableOpacity>

            </View>

        );
    }
}

