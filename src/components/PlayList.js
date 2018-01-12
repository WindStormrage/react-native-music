
/*
*播放列表
*/

import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet
} from 'react-native';


export default class Lrc extends Component<{}> {
	render() {
		return (
			<View style={styles.main}>
				<FlatList
					style={{backgroundColor:'red', flex:0}}
					data={[{key: 'a'}, {key: 'b'}, {key: 'b'}]}
					renderItem={({item}) => <Text>{item.key}</Text>}
				/>
			</View>
		);
	}
}

const  styles = StyleSheet.create({
	main: {

	},
});