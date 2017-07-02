import React, { Component } from 'react';
import { StackNavigator, } from 'react-navigation';

import Cart from '../Cart/Cart';
import ProductDetail from '../productdetail/ProductDetail';



export const CartNavigation = StackNavigator({
    Screen_Cart:{
        screen: Cart,
        navigationOptions:{
            title: 'Cart'
        }
    },
     Screen_Detail: {
    screen: ProductDetail,
    navigationOptions: {
      title: 'Chi tiet'
    }
  },
});

export default CartNavigation;