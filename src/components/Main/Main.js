import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
//const { height } = Dimensions.get('window');

export default class Main extends Component {
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
