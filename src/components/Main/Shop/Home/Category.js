import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';


//get width, height of decive to use
const { width, height } = Dimensions.get('window');
const url = 'http://localhost/api/images/type/';

export default class Category extends Component {
    render(){
         const { types } = this.props;
    const { wrapper, textStyle, imageStyle, cateTitle } = styles;
    return (
        <View style={wrapper}>
            <View style={{ flex: 1, justifyContent: 'center', padding: 5 }}>
                <Text style={textStyle}> SPRING COLLECTION</Text>
            </View>
            <View style={{ flex: 4, justifyContent: 'flex-end' }} >
                <Swiper showPagination width={imageWidth} height={imageHeight}>
                    { types.map(e => (
                         <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen_List')} key = {e.id}>
                        <Image source={{uri: `${url}${e.image}`}} style={imageStyle}>
                            <Text style={cateTitle}>{e.name}</Text>
                        </Image>
                    </TouchableOpacity>
                    ))}
                    {/*<TouchableOpacity onPress={() => navigation.navigate('Screen_List') }>
                        <Image source={littleIcon} style={imageStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={maxiIcon} style={imageStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={partyIcon} style={imageStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                    </TouchableOpacity>*/}
                </Swiper>
            </View>
        </View>
    );
    }
}
//<Swiper showPagination width = {imageWidth}> set width
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF',
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A',

    }
})