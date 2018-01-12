//
// import React, { Component } from 'react';
//
// import App from './containers/App'
//
// import { Provider } from 'react-redux';
// import {store, mapStateToProps, mapDispatchToProps} from './store';
//
// import { Provider, connect } from 'react-redux';
//
//
// App = connect(mapStateToProps, mapDispatchToProps)(App);
//
//
// export default class Root extends Component<{}> {
// 	render() {
// 		return (
// 			<Provider store={store}>
// 				<App/>
// 			</Provider>
// 		);
// 	}
// }



import React, { Component } from 'react';

import App from './containers/App'



export default class Root extends Component<{}> {
	render() {
		return (
				<App/>
		);
	}
}
