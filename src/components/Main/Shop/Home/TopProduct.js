import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

export default class TopProduct extends Component {
    gotoDetail(product){
        const {navigation} = this.props;
        navigation.navigate('Screen_Detail', product)
    }
    render() {
        const { topProducts } = this.props;
        const url = 'http://localhost/api/images/product/'
        const {
            container,
            titleContainer,
            title,
            body,
            productContainer,
            productImage,
            productName,
            productPrice,
        } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <FlatList
                        keyExtractor = {item => item.id}
                        data={topProducts}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={productContainer} onPress={() => this.gotoDetail(item)}>
                            <Image style={productImage} source={{ uri: `${url}${item.images[0]}` }} />
                            <Text style={productName}> {item.name.toUpperCase()} </Text>
                            <Text style={productPrice}>${item.price}</Text>
                        </TouchableOpacity>
                        }
                    horizontal = {false}
                     numColumns = {2}
                    />
                    {/*<View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                       <Text style= {productName}> PRODUCT NAME </Text>
                        <Text style = {productPrice}>$400</Text>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp2} />
                        <Text style= {productName}> PRODUCT NAME </Text>
                        <Text style = {productPrice}>$250</Text>
                    </View>
                    <View style = {{height:10, width}}/>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp3} />
                       <Text style= {productName}> PRODUCT NAME </Text>
                        <Text style = {productPrice}>$400</Text>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp4} />
                        <Text style= {productName}> PRODUCT NAME </Text>
                        <Text style = {productPrice}>$250</Text>
                    </View>*/}
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 80) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    productContainer: {
        width: productWidth,
        paddingBottom: 20,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
         marginLeft: 20
    },
    productImage: {
        width: productWidth,
        height: productImageHeight,
       
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500',
    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: (width - 2*productWidth)/3,
        fontFamily: 'Avenir',
        color: '#662F90',
    },
})