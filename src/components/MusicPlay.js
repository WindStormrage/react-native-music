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
		const type = [
			require('./../static/loop.png'),
			require('./../static/order.png'),
			require('./../static/random.png'),
			require('./../static/single.png')
		];
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
					{/*播放样式*/}
					<TouchableOpacity
						onPress={()=>{
							this.props.onType(this.props.that)
						}}>
						<Image
							style={image}
							source={type[this.props.nowType]}
						/>
					</TouchableOpacity>
					{/*前一首*/}
					<TouchableOpacity
						onPress={()=>{
							this.props.onPrevious(this.props.that)
						}}>
						<Image
							style={image}
							source={require('./../static/previous.png')}
						/>
					</TouchableOpacity>
					{/*开始暂停*/}
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
					{/*下一首*/}
					<TouchableOpacity
						onPress={()=>{
							this.props.onNext(this.props.that)
						}}>
						<Image
							style={image}
							source={require('./../static/next.png')}
						/>
					</TouchableOpacity>
					{/*播放列表*/}
					<TouchableOpacity
						onPress={()=>{
							this.props.onList(this.props.that)
						}}>
						<Image
							style={image}
							source={require('./../static/list.png')}
						/>
					</TouchableOpacity>
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
};