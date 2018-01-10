/*
*音乐播放的头部
**/

import React, { Component } from 'react';
import {
	StatusBar,
	View,
	Image,
	Text
} from 'react-native';

import {getWidth, getHeight} from "../util/size";

export default class MusicHead extends Component<{}> {
	render() {
		return (
			<View style={flex}>
				<Image
					style={back}
					source={require('./../static/back-black.png')}
				/>
				<View style={center}>
					<Text style={{fontSize: getHeight(18)}}>歌名歌名</Text>
					<Text style={{fontSize: getHeight(10),textAlign: 'center'}}>歌手歌手</Text>
				</View>
				<Image
					style={heart}
					source={require('./../static/heart.png')}
				/>
			</View>
		);
	}
}

const flex = {
	marginTop: getHeight(15),
	//marginTop: StatusBar.currentHeight,
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	height: getHeight(40),
	//backgroundColor: '#666',
	flex: 0
};

const center = {
	marginLeft: getWidth(0),
	height: getHeight(30),
	justifyContent: 'center'
}

const back = {
	height: getHeight(30),
	width: getWidth(30),
	marginLeft: getWidth(5)
};

const heart = {
	height: getHeight(30),
	width: getWidth(30),
	marginRight: getWidth(10)
};