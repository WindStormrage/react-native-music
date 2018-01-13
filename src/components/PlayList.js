
/*
*播放列表
*/

import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';

import {getWidth, getHeight} from "../util/size";

import line from './line.js';

export default class Lrc extends Component<{}> {


	render() {

		return (
			<View>
				<View style={styles.title}>
					<View style={{flexDirection: 'row',alignItems:'center'}}>
						<Image
							style={styles.type}
							source={require('./../static/order.png')}/>
						<Text style={styles.titleType}>顺序播放（2）</Text>
					</View>
					<Image
						style={styles.del}
						source={require('./../static/delete.png')}/>
				</View>
				<FlatList
					data={this.props.musicList}
					renderItem={({item, index}) =>
						<TouchableOpacity onPress={()=>{
							this.props.onSetNow(index, this.props.that)
						}}>
							<View style={styles.list}>
								<View style={styles.text}>
									<Text style={styles.name}>{item.songName}</Text>
									<Text style={styles.songer}>{item.songAuthor}</Text>
								</View>
								<View style={styles.icon}>
									<Image
										style={styles.heart}
										source={require('./../static/heart.png')}
									/>
									<Image
										style={styles.heart}
										source={require('./../static/fork.png')}
									/>
								</View>
							</View>
						</TouchableOpacity>
					}
					ItemSeparatorComponent={line}

				/>
			</View>



		);
	}
}

const  styles = StyleSheet.create({
	heart: {
		marginRight: getWidth(30),
		height: getHeight(20),
		width: getWidth(20),
	},
	del:{
		height: getHeight(17),
		width: getWidth(17),
		marginRight: getWidth(20)
	},
	type:{
		height: getHeight(17),
		width: getWidth(17),
		marginLeft: getWidth(20)
	},
	titleType:{
		fontSize: getWidth(15),
		marginLeft: getWidth(15)
	},
	title:{
		height: getHeight(50),
		alignItems:'center',
		borderBottomWidth: getWidth(1),
		borderBottomColor: '#ccc',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	list:{
		height: getHeight(50),
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	text:{
		alignItems: 'center',
		flexDirection: 'row'
	},
	icon: {
		alignItems: 'center',
		flexDirection: 'row'
	},
	name:{
		fontSize:getWidth(15),
		marginLeft: getWidth(15)
	},
	songer:{
		fontSize:getWidth(10),
		marginLeft: getWidth(10),
		paddingTop: getHeight(3),
		color: '#666'
	}
})