/**
 * Store 用于存放应用中所有的state，
 * Redux应用只有一个单一的store。
 * store 是把 action 、reducers联系在一起的对象，它有以下职责：
 * 1.维持应用的状态
 * 2.提供getState()方法获取state
 * 3.提供dispatch(action)方法更新state
 * 4.通过 subscriber(listener)注册监听器
 */

import {
	createStore
} from 'redux';

import reducers from './reducers';

import actions from './actions'

export const store = createStore(reducers);




export function mapStateToProps(state) {
	return { isplay: state.isplay }
}


 //映射Redux actions到组件的属性
export function mapDispatchToProps(dispatch){
	return{
		onPlay:()=>dispatch(actions.MusicAction),
	}
}
