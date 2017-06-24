

import React, { Component } from 'react';
import App from './src/components/App';
import {
  AppRegistry
} from 'react-native';

export default class LifeDemo extends Component {
  render() {
    return  <App/>;
  }
}
AppRegistry.registerComponent('LifeDemo', () => LifeDemo);
