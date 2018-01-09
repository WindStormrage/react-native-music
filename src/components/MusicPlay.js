/*
*单个音乐的下面播放的组件
*/

import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';


export default class MusicPlay extends Component<{}> {
	render() {
		return (
			<View style={main}>
				<View style={progress}>
					<Text>0:00</Text>
					<View>
						<View style={line1}></View>
						<View style={line2}></View>
					</View>
					<Text>0:00</Text>
				</View>
				<View style={component}>
					<Image
						style={image}
						source={require('./../static/random.png')}
					/>
					<Image
						style={image}
						source={require('./../static/previous.png')}
					/>
					<Image
						style={image}
						source={require('./../static/play.png')}
					/>
					<Image
						style={image}
						source={require('./../static/next.png')}
					/>
					<Image
						style={image}
						source={require('./../static/list.png')}
					/>
				</View>
			</View>
		);
	}
}

const main = {
	marginTop: 20
};

const progress = {
	height: 50,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-around',
	margin: 20
};

const line1 = {
	width: 350,
	backgroundColor: 'red',
	height: 1
};
const line2 = {
	width: 100,
	backgroundColor: 'blue',
	height: 1,
	marginTop: -1
};


const component = {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-around',
	marginTop: 10
};

const image = {
	height: 50,
	width: 50
}