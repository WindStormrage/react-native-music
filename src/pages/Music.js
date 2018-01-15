/*
*单个音乐的播放页面
*/

import React, { Component } from 'react';
import {
	ScrollView,
	Dimensions,
	View,
	FlatList,
	StyleSheet,
	Text,
	Alert
} from 'react-native';
import Head from './../components/MusicHead.js';
import Poster from './../components/Poster.js';
import Lrc from './../components/Lrc.js';
import MusicPlay from './../components/MusicPlay.js';
import PlayList from './../components/PlayList.js';

import Video from 'react-native-video';

import {toInt} from './../util/HandlingTime'

export default class Music extends Component<{}> {

	state = {
		isplay: false,
		time: 0,
		now: 0,
		musicList: [
			{
				songName: '宠爱',
				songAuthor: '小胖',
				songUrl: 'http://mr3.doubanio.com/ac3a15091649c03c39e20cef9a6f2eb0/0/fm/song/p1380679_128k.mp4',
				time: '4:00'
			},
			{
				songName: '风继续吹',
				songAuthor: '张国荣',
				songUrl: 'http://mr3.doubanio.com/a0218d365b0a6b24d427fbc3f3a5b4e4/1/fm/song/p1563358_128k.mp4',
				time: '4:02'

			},
			{
				songName: '说散就散',
				songAuthor: 'JC',
				songUrl: 'http://gss0.bdstatic.com/y0s1hSulBw92lNKgpU_Z2jR7b2w6buu/data2/music/927be387c6bb7c9a1a4b33321b598012/543204747/543204191169200128.mp3?xcode=a373b7c823a9e69c180b9e6dd2675aac',
				time: '3:50'

			}

		]
	};

	constructor(props) {
		super(props);
		this.onPlay = this.onPlay.bind(this);
		this.setNow = this.setNow.bind(this);
	}

	//更改播放暂停状态
	onPlay(change){
		this.setState({isplay: change});
	}

	//点击进度条设置时间
	setTime(time){
		Alert.alert(time.toString())
	}

	//设置当前播放的歌曲
	setNow(now, that){
		that.setState({now: now})
		//设置一下进度条从最开始开始
	}
	//当视频播放完毕后的回调
	onEnd(){
		//顺序播放
		let now = this.state.now;
		let long = this.state.musicList.length;
		//如果播放完了
		if(this.state.time >= toInt(this.state.musicList[now].time)){
			//后面没有歌了，从第一首开始
			if(now+2>long){
				this.setState({now: 0})
			}else{
				this.setState({now: now+1})
			}
		}
	}

	//点击下一首
	onNext(that){
		let now = that.state.now;
		let long = that.state.musicList.length;
		if(now+2>long){
			that.setState({now: 0})
		}else{
			that.setState({now: now+1})
		}
	}
	//点击上一首
	onPrevious(that){
		let now = that.state.now;
		let long = that.state.musicList.length;
		if(now===0){
			that.setState({now: long-1})
		}else{
			that.setState({now: now-1})
		}
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.main}>
					<Video source={{uri: this.state.musicList[this.state.now].songUrl}}
					       repeat={false}
					       style={styles.backgroundVideo}
					       paused={this.state.isplay}
					       onProgress={(data)=>{
						       this.setState({time: data.currentTime});
					       }}
					       playInBackground={true}
					       onEnd={this.onEnd()}
					/>
					<Head
						name={this.state.musicList[this.state.now].songName}
						author={this.state.musicList[this.state.now].songAuthor}
					/>
					{/*<Poster />*/}
					{/*<Lrc />*/}
					<MusicPlay
						isplay={this.state.isplay}
						onPlayChange={this.onPlay}
						time={this.state.time}
						allTime={this.state.musicList[this.state.now].time}
						setTime={this.setTime}
						onNext={this.onNext}
						onPrevious={this.onPrevious}
						that={this}
					/>
					<PlayList
						musicList={this.state.musicList}
						onSetNow={this.setNow}
						that={this}
					/>
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



// source={{uri: ""}} // 视频的URL地址，或者本地地址，都可以.
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