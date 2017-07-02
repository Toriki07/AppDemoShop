import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

import backList from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg'

const ListProduct = ({ navigation }) => {
    const {
        container, header, wrapper,
        backStyle, titleStyle, productContainer,
        productInfo, productImage, lastrowInfo,
        txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
    } = styles;
    return (
        <View style={container}>
            <ScrollView style={wrapper}>
                <View style={header}>
                    <Image source={backList} style={backStyle} />
                    <Text style={titleStyle}> Party Dress</Text>
                    <View style={{ width: 30 }} />
                </View>
                <View style={productContainer} >
                    <Image style={productImage} source={sp1} />
                    <View style={productInfo}>
                        <Text style={txtName}>Lace Sleeve Si</Text>
                        <Text style={txtPrice}>117$</Text>
                        <Text style={txtMaterial}>Material silk</Text>
                        <View style={lastrowInfo} >
                            <Text style={txtColor}>Color RoyalBule</Text>
                            <View style={{backgroundColor: 'cyan', height: 16, width: 16, borderRadius:32}} />
                            <TouchableOpacity>
                                <Text style={txtShowDetail}>SHOW DETAIL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={productContainer} >
                    <Image style={productImage} source={sp1} />
                    <View style={productInfo}>
                        <Text style={txtName}>Lace Sleeve Si</Text>
                        <Text style={txtPrice}>117$</Text>
                        <Text style={txtMaterial}>Material silk</Text>
                        <View style={lastrowInfo} >
                            <Text style={txtColor}>Color RoyalBule</Text>
                            <View style={{backgroundColor: 'cyan', height: 16, width: 16, borderRadius:32}} />
                            <TouchableOpacity>
                                <Text style={txtShowDetail}>SHOW DETAIL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={productContainer} >
                    <Image style={productImage} source={sp1} />
                    <View style={productInfo}>
                        <Text style={txtName}>Lace Sleeve Si</Text>
                        <Text style={txtPrice}>117$</Text>
                        <Text style={txtMaterial}>Material silk</Text>
                        <View style={lastrowInfo} >
                            <Text style={txtColor}>Color RoyalBule</Text>
                            <View style={{backgroundColor: 'cyan', height: 16, width: 16, borderRadius:32}} />
                            <TouchableOpacity>
                                <Text style={txtShowDetail}>SHOW DETAIL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={productContainer} >
                    <Image style={productImage} source={sp1} />
                    <View style={productInfo}>
                        <Text style={txtName}>Lace Sleeve Si</Text>
                        <Text style={txtPrice}>117$</Text>
                        <Text style={txtMaterial}>Material silk</Text>
                        <View style={lastrowInfo} >
                            <Text style={txtColor}>Color RoyalBule</Text>
                            <View style={{backgroundColor: 'cyan', height: 16, width: 16, borderRadius:32}} />
                            <TouchableOpacity>
                                <Text style={txtShowDetail}>SHOW DETAIL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={productContainer} >
                    <Image style={productImage} source={sp1} />
                    <View style={productInfo}>
                        <Text style={txtName}>Lace Sleeve Si</Text>
                        <Text style={txtPrice}>117$</Text>
                        <Text style={txtMaterial}>Material silk</Text>
                        <View style={lastrowInfo} >
                            <Text style={txtColor}>Color RoyalBule</Text>
                            <View style={{backgroundColor: 'cyan', height: 16, width: 16, borderRadius:32}} />
                            <TouchableOpacity>
                                <Text style={txtShowDetail}>SHOW DETAIL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );

}
export default ListProduct

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#DBDBDB',
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wrapper: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
    },
    backStyle: {
        width: 30,
        height: 30,
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1,
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361,

    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1,
    },
    lastrowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400',
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir',

    },
    txtColor: {
        fontFamily: 'Avenir',

    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 13,

    }

})