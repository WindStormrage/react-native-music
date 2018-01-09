/*
*音乐播放的头部
**/

import React, { Component } from 'react';
import {
	View,
	Image,
	Text
} from 'react-native';



export default class MusicHead extends Component<{}> {
	render() {
		return (
			<View style={flex}>
				<Image
					style={back}
					source={require('./../static/back-black.png')}
				/>
				<View style={center}>
					<Text style={{fontSize: 25}}>歌名歌名</Text>
					<Text style={{fontSize: 20,textAlign: 'center'}}>歌手歌手</Text>
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
	marginTop: 5,
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	height: 80,
	//backgroundColor: '#666'
};

const center = {
	marginLeft: 10,
	height: 50
}

const back = {
	height: 50,
	width: 50,
	marginLeft: 10
};

const heart = {
	height: 50,
	width: 50,
	marginRight: 30
};