/*
*单个音乐的歌词
*/

import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';


export default class Lrc extends Component<{}> {
	render() {
		return (
			<View style={main}>
				<Text style={text}>歌词歌词歌词歌词歌词</Text>
				<Text style={text}>歌词歌词歌词歌词歌词歌词歌</Text>
				<Text style={text}>歌词歌词歌词歌词歌词</Text>
				<Text style={text}>歌词歌词歌词歌词歌词词</Text>
				<Text style={text}>歌词歌词歌词歌词歌词歌词歌</Text>
			</View>
		);
	}
}

const text = {
	fontSize: 20,
	//color: '#fff',
	zIndex: -1
}

const main = {
	height: 80,
	//backgroundColor: '#666',
	marginTop: 50,
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden'
};