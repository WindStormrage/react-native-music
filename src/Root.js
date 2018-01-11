/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import App from './containers/App'

import { Provider } from 'react-redux';
import store from './store';

export default class Root extends Component<{}> {
	render() {
		return (
			<Provider store={store}>
				<App/>
			</Provider>
		);
	}
}
