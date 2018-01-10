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
			<View style={body}>
				<View style={main}>
					<Image
						style={{height: getHeight(270), width: getWidth(270)}}
						source={{uri: 'http://pic.58pic.com/58pic/15/53/09/54M58PIC2BX_1024.png'}}
					/>
				</View>
			</View>
		);
	}
}

const body = {
	alignItems: 'center',
	flex: 1,
	//backgroundColor:'red',
	justifyContent: 'center',
};

const main = {
	height: getHeight(270),
	width: getWidth(270),
	borderRadius: getHeight(270),
	backgroundColor: '#666',
	marginTop: getHeight(30),
	overflow: 'hidden',
};

/*
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
						style={{height: 450, width: 450}}
						source={{uri: 'http://pic.58pic.com/58pic/15/53/09/54M58PIC2BX_1024.png'}}
					/>
				</View>
			</View>
		);
	}
}


const main = {
	height: 450,
	width: 450,
	borderRadius: 1000,
	backgroundColor: 'red',
	marginTop: 30,
	overflow: 'hidden',
};*/
