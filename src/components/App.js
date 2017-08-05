// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar
// } from 'react-native';

// import Authentication from './Authentication/Authentication';
// import ChangeInfo from './ChangeInfo/ChangeInfo';
// import Main from './Main/Main';
// import OrderHistory from './OrderHistory/OrderHistory';
// import { MainStack } from './Router';
// // import {Tabs} from './Router';
// import {SideMenu} from './Router';
// StatusBar.setHidden(true);
// export default class App extends Component {
//   render() {
//     return (
//       <Main />
//     );
//   }
// }
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

//import Shop from './Shop/Shop';
//import Menu from './Menu';
import checkLogin from '../api/CheckLogin';
import getToken from '../api/GetToken';
import {SideMenu} from './Router';
//const { height } = Dimensions.get('window');

//const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjEyMyIsImlhdCI6MTUwMTczMjY1MiwiZXhwaXJlIjoxNTAxOTA1NDUyfQ.i_hpD9O8cB5m0xpRGx3eWqzIEkgzvcWw3IWjlzeSck4';
export default class App extends Component {
  componentDidMount(){
    getToken()
    .then(token => checkLogin(token))
    .then(res => console.log('CHECK LOGIN', res))
    .catch(err => console.log('LOI CHECK LOGIN', err));
  }
  render() {
    return (
     <SideMenu />
    );
  }
}