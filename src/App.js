/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
  View,
	StatusBar
} from 'react-native';
import Music from './pages/Music.js'


export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Music />
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => App);