import React, { Component } from 'react';
import { StackNavigator, } from 'react-navigation';

import Search from '../Search/Search';
import ProductDetail from '../productdetail/ProductDetail';



export const SearchNavigation = StackNavigator({
    Screen_Search:{
        screen: Search,
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

export default SearchNavigation;