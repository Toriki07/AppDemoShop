import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator, StackRouter } from 'react-navigation';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
//import Shop from './Main/Shop/Shop';
import Menu from './Main/Menu';
import Cart from './Main/Shop/Cart/Cart';
import Home from './Main/Shop/Home/Home';
import SearchNavigation from './Main/Shop/Search/SearchNavigation';
import Contact from './Main/Shop/Contact/Contact';

//import HomeStack from './Main/Shop/Home/HomeNavigation';
import CartNavigation from './Main/Shop/Cart/CartNavigation';

//import media
import homeIconS from '../media/appIcon/home.png';
import homeIcon from '../media/appIcon/home0.png';
import cartIconS from '../media/appIcon/cart.png' ;
import cartIcon from '../media/appIcon/cart0.png' ;
import searchIconS from '../media/appIcon/search.png';
import searchIcon from '../media/appIcon/search0.png';
import contactIconS from '../media/appIcon/contact.png';
import contactIcon from '../media/appIcon/contact0.png';

//-----------


//dieu huong cho mang hinh trong component MENU
// export const MenuStack = DrawerNavigator({
//     Screen_Menu: {
//         screen: Menu,
        
//     },
//     Screen_Authentication: {
//         screen: Authentication,
//         navigationOptions: {
//             title: 'Authentication'
//         }
//     },
//     Screen_ChangeInfo: {
//         screen: ChangeInfo,
//         navigationOptions: {
//             title: 'Change Info'
//         }
//     },
//     Screen_OrderHistory: {
//         screen: OrderHistory,
//         navigationOptions: {
//             title: 'Order History'
//         }
//     }
// });
//- - - - - -- - - - - - - - 
 
export const ContactStack = StackNavigator({
    Screen_Contact:{
        screen: Contact,
        navigationOptions:{
            title: 'Contact'
        }
    }
});
//  dieu huong cho TabBar trong mac dinh man hinh Home chinh
export const ShopTabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../media/appIcon/home.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
    }
  },
  Cart: {
    screen: CartNavigation,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../media/appIcon/cart.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
    }
  },
  Search: {
    screen: SearchNavigation,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../media/appIcon/search.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
    }
  },
     
  Contact: {
    screen: ContactStack,
    navigationOptions: {
       header: null,
      tabBarLabel: 'Contact',
      tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../media/appIcon/contact.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
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
      activeTintColor: 'pink'

    },

  }
);
// dieuf huong cho viec mo mo Mune trong manh hinh chinh cua MENU
//ham menu ma cac mang hinh chuyen dong qua lai trong MENU
export const MainStack = StackNavigator(
  {
    Tabbar: {screen: ShopTabs},
    
    Authentication: {screen: Authentication},
    ChangeInfo: { screen: ChangeInfo},
    OrderHistory: { screen: OrderHistory},
  },
);

// - - - - - - - - - - - - - - - - - - -
export const SideMenu = DrawerNavigator(
  {
    MainStack: {screen: MainStack},
   
  },
  {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props}/>
  }
);
const styles = {
    icon: {
        width: 32,
        height: 32
    }
}