import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';


export default class OrderHistory extends Component {
      constructor(props) {
        super(props);
        this.state = { arrOrder: [] };
    }
  render() {
     const { wrapper, body, orderRow } = styles;
    return (
      <View style={wrapper}>
                
                <View style={body}>
                    <ScrollView>
                        <View style={orderRow}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
                            </View>
                        </View>

                        <View style={orderRow}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
                            </View>
                        </View>

                        <View style={orderRow}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
                            </View>
                        </View>
                        <View style={orderRow}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
                            </View>
                        </View>
                        <View style={orderRow}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    body: { flex: 10, backgroundColor: '#F6F6F6' },
    orderRow: {
        height: width / 3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around'
    }
});
