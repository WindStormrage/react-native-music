/*
*单个音乐的下面播放的组件
*/

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Alert,
	TouchableOpacity
} from 'react-native';

import {getWidth, getHeight} from "../util/size";

export default class MusicPlay extends Component<{}> {

	state = {
		isplay: true
	};


	render() {

		const {onPlay} = this.props;

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
					<TouchableOpacity
						onPress={() => {
							let a = !this.state.isplay;
							this.setState({
								isplay : a
							});
							Alert.alert('温馨提醒',a.toString());
							onPlay;
						}}>
						<Image
							style={image}
							source={this.state.isplay?require('./../static/start.png'):require('./../static/play.png')}
						/>
					</TouchableOpacity>
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
	marginTop: 20,
	flex: 0,
	//backgroundColor: 'yellow'
};

const progress = {
	height: getHeight(50),
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-around',
	//backgroundColor: 'red'
};

const line1 = {
	width: getWidth(270),
	backgroundColor: 'red',
	height: getHeight(1)
};
const line2 = {
	width: getWidth(50),
	backgroundColor: 'blue',
	height: getHeight(1),
	marginTop: getHeight(-1)
};


const component = {
	//backgroundColor: 'red',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-around',
	paddingTop: getHeight(10),
	paddingBottom: getHeight(25)
};

const image = {
	height: getHeight(40),
	width: getWidth(40)
}