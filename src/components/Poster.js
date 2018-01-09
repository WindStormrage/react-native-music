/*
*单个音乐的中间旋转的海报
*/

import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';

import {getWidth, getHeight} from "../util/size";


export default class Poster extends Component<{}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<View style={main}>
					<Image
						style={{height: getHeight(250), width: getWidth(250)}}
						source={{uri: 'http://pic.58pic.com/58pic/15/53/09/54M58PIC2BX_1024.png'}}
					/>
				</View>
			</View>
		);
	}
}


const main = {
	height: getHeight(250),
	width: getWidth(250),
	borderRadius: 1000,
	backgroundColor: '#666',
	marginTop: getHeight(30),
	overflow: 'hidden',

};