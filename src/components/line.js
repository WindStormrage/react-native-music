
import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Button
} from 'react-native';

import {getWidth, getHeight} from "../util/size";


export default class line extends Component<{}> {


	render() {

		return (
			<View style={styles.line}>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	line: {
		height: getHeight(1),
		backgroundColor: '#ddd',
		marginLeft: getWidth(15),
		marginRight: getWidth(15)
	}
})