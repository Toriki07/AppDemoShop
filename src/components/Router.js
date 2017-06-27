import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
import Shop from './Main/Shop/Shop';
import Menu from './Main/Menu';
import Cart from './Main/Shop/Cart/Cart';
import Home from './Main/Shop/Home/Home';
import Search from './Main/Shop/Search/Search';
import Contact from './Main/Shop/Contact/Contact';

export const MenuStack = DrawerNavigator({
    Screen_Menu: {
        screen: Menu,
        
    },
    Screen_Authentication: {
        screen: Authentication,
        navigationOptions: {
            title: 'Authentication'
        }
    },
    Screen_ChangeInfo: {
        screen: ChangeInfo,
        navigationOptions: {
            title: 'Change Info'
        }
    },
    Screen_OrderHistory: {
        screen: OrderHistory,
        navigationOptions: {
            title: 'Order History'
        }
    }
});

export const ShopStack = StackNavigator({
    Screen_Shop:{
        screen: Shop,
        navigationOptions:{
            title: 'Shop'
        }
    }
});
export const HomeStack = StackNavigator({
    Screen_Home:{
        screen: Home,
        navigationOptions:{
            title: 'Home'
        }
    }
});
export const CartStack = StackNavigator({
    Screen_Cart:{
        screen: Cart,
        navigationOptions:{
            title: 'Cart'
        }
    }
});
export const SearchStack = StackNavigator({
    Screen_Search:{
        screen: Search,
        navigationOptions:{
            title: 'Search'
        }
    }
});
export const ContactStack = StackNavigator({
    Screen_Contact:{
        screen: Contact,
        navigationOptions:{
            title: 'Contact'
        }
    }
});

export const ShopTabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'HOME'
    }
  },
  Cart: {
    screen: CartStack,
    navigationOptions: {
      tabBarLabel: 'Cart'
    }
  },
  SearchStack: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'SearchStack'
    }
  },
     
  Contact: {
    screen: ContactStack,
    navigationOptions: {
      tabBarLabel: 'Contact'
    }
  },
},
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: '#BDBDBD',
      },
      inactiveTintColor: 'green',
      activeTintColor: 'red'

    },

  }
);
export const SideMenu = DrawerNavigator(
  {
    Tabbar: {
      screen: ShopTabs
    },
  },
  {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: props => <ScrollView><MenuStack  /></ScrollView>
  }
);