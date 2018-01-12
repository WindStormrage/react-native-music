/*
*单个音乐的播放页面
*/

import React, { Component } from 'react';
import {
	ScrollView,
	Dimensions,
	View,
	Alert,
	StyleSheet
} from 'react-native';
import Head from './../components/MusicHead.js';
import Poster from './../components/Poster.js';
import Lrc from './../components/Lrc.js';
import MusicPlay from './../components/MusicPlay.js';

import Video from 'react-native-video';

export default class Music extends Component<{}> {

	state = {
		isplay: false
	};

	constructor(props) {
		super(props);
		this.onPlay = this.onPlay.bind(this);
	}

	onPlay(change){
		this.setState({isplay: change});
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.main}>
					<Video source={{uri: "http://fs.w.kugou.com/201801111854/7eaafed62138957cc4814bc08a1b75de/G121/M09/17/09/uQ0DAFoqk1-AQqDuADs8dWUtoJY854.mp3"}}
					       repeat={true}
					       style={styles.backgroundVideo}
					       paused={this.state.isplay}
					/>
					<Head />
					<Poster />
					<Lrc />
					<MusicPlay
						isplay={this.state.isplay}
						onPlayChange={this.onPlay}/>
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



// source={{uri: "http://fs.w.kugou.com/201801101841/ad3cc0283e306da52d456e4f676acabd/G121/M09/17/09/uQ0DAFoqk1-AQqDuADs8dWUtoJY854.mp3"}} // 视频的URL地址，或者本地地址，都可以.
// rate={1.0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
// volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
// muted={false}                // true代表静音，默认为false.
// paused={false}               // true代表暂停，默认为false
// resizeMode="cover"           // 视频的自适应伸缩铺放行为，
// repeat={true}                // 是否重复播放
// playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
// playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
// onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
// onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
// onProgress={this.setTime}    //  进度控制，每250ms调用一次，以获取视频播放的进度
// onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
// onError={this.videoError}    // 当视频不能加载，或出错后的回调函数