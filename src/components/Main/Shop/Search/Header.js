import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet } from 'react-native';

import icLogo from '../../../../media/appIcon/ic_logo.png';
import icMenu from '../../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

class Header extends Component {
    state = {}
    render() {
        const { wrapper, row1, textInput } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('DrawerOpen') }
                    }
                >
                    <Image source={icMenu} />
                </TouchableOpacity>
                <Text> LifePlus Demo </Text>
                <Image source={icLogo} />
                </View>
                <TextInput style={textInput}/>
            </View>
        );
    }
}
Header.propTypes = {
    navigation: React.PropTypes.object.isRequired,
};
export default Header;

const styles = StyleSheet.create({
    wrapper: {height: height / 10, backgroundColor: '#FA5882',},
    row1: {flexDirection: 'row', justifyContent: 'space-between' },
    textInput: {height: height / 20, backgroundColor: '#FFF'}
});