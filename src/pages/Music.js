/*
*单个音乐的播放页面
*/

import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';
import Head from './../components/MusicHead.js';
import Poster from './../components/Poster.js';
import Lrc from './../components/Lrc.js';
import MusicPlay from './../components/MusicPlay.js';


export default class Music extends Component<{}> {
	render() {
		return (
			<View style={{justifyContent: 'center'}}>
				<Head />
				<Poster/>
				<Lrc/>
				<MusicPlay />
			</View>
		);
	}
}

