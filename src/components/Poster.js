/*
*单个音乐的中间旋转的海报
*/

import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';


export default class Poster extends Component<{}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<View style={main}>
					<Image
						style={{height: 350, width: 350}}
						source={{uri: 'http://pic.58pic.com/58pic/15/53/09/54M58PIC2BX_1024.png'}}
					/>
				</View>
			</View>
		);
	}
}


const main = {
	height: 350,
	width: 350,
	borderRadius: 175,
	backgroundColor: '#666',
	marginTop: 50,
	overflow: 'hidden'
};