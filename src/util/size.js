import {Dimensions}from 'react-native'


const BASE_WIN_HEIGHT = 667;
const BASE_WIN_WIDTH = 375;


/** 根据实际屏幕尺寸转换对应的像素高度 */

export function getHeight(h) {
	if (!this.height) {
		var {height, width} = Dimensions.get('window');
		this.height = height;
		this.width = width;
	}
	return h  * (this.height / BASE_WIN_HEIGHT);
}

/** 根据实际屏幕尺寸转换对应的像素宽度 */
export function getWidth(w) {
	if (!this.width) {
		var {height, width} = Dimensions.get('window');
		this.height = height;
		this.width = width;
	}
	return w  * (this.width / BASE_WIN_WIDTH);
}

