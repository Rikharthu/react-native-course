import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import Router from './src/Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyDXezPWR1vevFTZGBV680e5Afj66TI6N6g',
			authDomain: 'playground-187115.firebaseapp.com',
			databaseURL: 'https://playground-187115.firebaseio.com',
			projectId: 'playground-187115',
			storageBucket: 'playground-187115.appspot.com',
			messagingSenderId: '133606379807'
		};
		firebase.initializeApp(config);
	}

	render() {
		// 1. reducers
		// 2. initial state
		// 3. middleware (store enhancers) for additional functionality
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
