/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
  View,
	Text
} from 'react-native';
import Music from './pages/Music.js'


export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Music />
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => App);