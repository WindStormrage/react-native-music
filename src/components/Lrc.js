/*
*单个音乐的歌词
*/

import React, { Component } from 'react';
import {
	PixelRatio,
	View,
	Text,
	Image
} from 'react-native';

import {getWidth, getHeight} from "../util/size";

export default class Lrc extends Component<{}> {
	render() {
		let pr = PixelRatio.get();
		return (
			<View style={main}>
				<Text style={text}>歌词歌词歌词歌词歌词歌词歌{pr}</Text>
				<Text style={text}>歌词歌词歌词歌词歌词{pr}</Text>
				<Text style={text}>歌词歌词歌词歌词歌词词{pr}</Text>
			</View>
		);
	}
}

const text = {
	fontSize: getHeight(15),
	//color: '#fff',
	zIndex: -1
}

const main = {
	height: getHeight(80),
	marginTop: getHeight(20),
	alignItems: 'center',
	justifyContent: 'center',
	//backgroundColor:'yellow',
	flex: 0
};