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
		nowType: 0,
		showPoster: true,
		showLrc: true,
		showList: false,
		show: true,
		musicList: [
			{
				songName: '成名在望',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/chengminzaiwang.mp3',
				time: '5:07'
			},
			{
				songName: '好好',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/haohao.mp3',
				time: '3:18'
			},
			{
				songName: '后来的我们',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/houlaidewomen.mp3',
				time: '5:46'
			},
			{
				songName: '你说那C和弦就是...',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/nishuo.mp3',
				time: '2:16'
			},
			{
				songName: '动物派对',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/dongwupaidui.mp3',
				time: '4:10'
			},
			{
				songName: '人生有限公司',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/renshengyouxiangongsi.mp3',
				time: '3:37'
			},
			{
				songName: '任意门',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/renyimen.mp3',
				time: '4:32'
			},
			{
				songName: '如果我们不曾相遇',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/ruguo.mp3',
				time: '3:21'
			},
			{
				songName: '少年他的奇幻漂流',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/shaonian.mp3',
				time: '4:35'
			},
			{
				songName: '顽固',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/wangu.mp3',
				time: '4:24'
			},
			{
				songName: '兄弟',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/xiongdi.mp3',
				time: '4:08'
			},
			{
				songName: '终于结束的起点',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/zhongyu.mp3',
				time: '5:06'
			},
			{
				songName: '转眼',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/zhuanyan.mp3',
				time: '6:07'
			},
			{
				songName: '最好的一天',
				songAuthor: '五月天',
				songUrl: 'http://www.xiedashuaige.cn:3000/music/zuihaodeyitian.mp3',
				time: '4:02'
			},
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
		let now = this.state.now;
		let long = this.state.musicList.length;
		let type = this.state.nowType;
		//如果播放完了
		if(this.state.time >= toInt(this.state.musicList[now].time)){
			//列表循环
			if(type === 0){
				//后面没有歌了，从第一首开始
				if(now+2>long){
					this.setState({now: 0})
				}else{
					this.setState({now: now+1})
				}
				//顺序播放
			}else	if(type === 1){
				//后面没有歌了，就不播放了
				if(now+2>long){

				}else{
					this.setState({now: now+1})
				}
				//随机播放
			}else if(type === 2){
				this.setState({now: parseInt(Math.random()*(long-1))})
				//单曲循环
			}else if(type === 3){
				this.setState({now: now})
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

	//点击类型
	onType(that){
		let nowType = that.state.nowType;
		if(nowType > 2){
			that.setState({nowType: 0});
		}else{
			that.setState({nowType: nowType+1});
		}
	}

	//点击列表//显示和隐藏设置
	onList(that){
		let showPoster= that.state.showPoster;
		let	showLrc= that.state.showLrc;
		let	showList= that.state.showList;

		that.setState({
			showPoster: !showPoster,
			showLrc: !showLrc,
			showList: !showList,
		})
	}

	render() {

		var v = this.state.show ? <Text>待显示的内容</Text> : null;    // 菜单



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
					{this.state.showPoster ? <Poster /> : null}
					{this.state.showLrc ? <Lrc /> : null}
					<MusicPlay
						isplay={this.state.isplay}
						onPlayChange={this.onPlay}
						time={this.state.time}
						allTime={this.state.musicList[this.state.now].time}
						setTime={this.setTime}
						onNext={this.onNext}
						onPrevious={this.onPrevious}
						onType={this.onType}
						nowType={this.state.nowType}
						onList={this.onList}
						that={this}
					/>
					{this.state.showList ?
						<PlayList
							musicList={this.state.musicList}
							onSetNow={this.setNow}
							nowType={this.state.nowType}
							that={this} /> : null}
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