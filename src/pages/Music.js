/*
*单个音乐的播放页面
*/

import React, { Component } from 'react';
import {
	ScrollView,
	Dimensions,
	View,
	StyleSheet
} from 'react-native';
import Head from './../components/MusicHead.js';
import Poster from './../components/Poster.js';
import Lrc from './../components/Lrc.js';
import MusicPlay from './../components/MusicPlay.js';


export default class Music extends Component<{}> {
	render() {
		return (
			<ScrollView>
				<View style={styles.main}>
					<Head />
					<Poster />
					<Lrc />
					<MusicPlay />
				</View>
			</ScrollView>
		);
	}
}

const  styles = StyleSheet.create({
	main: {
		height: Dimensions.get('window').height,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		//backgroundColor: '#5E5898',
		flex: 1
	},
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});