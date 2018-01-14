/*
*单个音乐的下面播放的组件
*/

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Alert,
	TouchableOpacity,
	TouchableWithoutFeedback,
	PixelRatio
} from 'react-native';

import {getWidth, getHeight} from "../util/size";

import {toTime, toInt} from "./../util/HandlingTime.js"

export default class MusicPlay extends Component<{}> {

	render() {
		return (
			<View style={main}>
				<View style={progress}>
					<Text>{toTime(this.props.time)}</Text>
					<TouchableWithoutFeedback
						onPressOut={(e)=>{
							let time = e.nativeEvent.locationX.toString()/getWidth(270)*toInt(this.props.allTime);
							this.props.setTime(time)
						}}>
						<View>
							<View style={line1}>
							</View>
							<View style={{width: getWidth(parseInt(this.props.time/toInt(this.props.allTime)*270)),
								backgroundColor: 'blue',
								height: getHeight(1),
								marginTop: getHeight(-1)}}>
							</View>
						</View>
					</TouchableWithoutFeedback>
					<Text>{this.props.allTime}</Text>
				</View>
				<View style={component}>
					<Image
						style={image}
						source={require('./../static/order.png')}
					/>
					<Image
						style={image}
						source={require('./../static/previous.png')}
					/>
					<TouchableOpacity
						onPress={()=>{
							let a = !this.props.isplay;
							this.props.onPlayChange(a)
						}}>
						<Image
							style={image}
							source={this.props.isplay?require('./../static/play.png'):require('./../static/start.png')}
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