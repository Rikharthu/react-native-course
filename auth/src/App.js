import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
	Header,
	Button,
	CardSection,
	Spinner
} from './components/common/index';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		const firebase = require('firebase');
		const config = {
			apiKey: 'AIzaSyDXezPWR1vevFTZGBV680e5Afj66TI6N6g',
			authDomain: 'playground-187115.firebaseapp.com',
			databaseURL: 'https://playground-187115.firebaseio.com',
			projectId: 'playground-187115',
			storageBucket: 'playground-187115.appspot.com',
			messagingSenderId: '133606379807'
		};
		firebase.initializeApp(config);

		firebase.auth().onAuthStateChanged(user => {
			console.log('New authentication sate:', user);
			this.setState({ loggedIn: user != null });
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case false:
				return <LoginForm onPress={() => {}} />;
			case true:
				return (
					<CardSection>
						<Button
							onPress={() => {
								const firebase = require('firebase');
								firebase.auth().signOut();
							}}
						>
							Log Out
						</Button>
					</CardSection>
				);
			default:
				return (
					<View
						style={{
							alignSelf: 'center'
						}}
					>
						<Spinner size="large" />
					</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
