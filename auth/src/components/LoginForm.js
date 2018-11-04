import React, { Component } from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	state = { email: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;
		if (email == null || password == null) {
			return;
		}
		const firebaseAuth = require('firebase').auth();

		this.setState({ error: '', loading: true });

		firebaseAuth
			.signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(err => {
				console.log('Could not log in user:', err);
				// Try to create new user then
				firebaseAuth
					.createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFailed.bind(this));
			});
	}

	onLoginFailed(err) {
		this.setState({ error: 'Authentication Failed.', loading: false });
	}

	onLoginSuccess() {
		this.setState({ loading: false, email: '', password: '', error: '' });
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label={'Email'}
						placeholder={'user@gmail.com'}
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry // same as secureTextEntry={true}
						label={'Password'}
						placeholder={'password'}
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>{this.state.error}</Text>

				<CardSection>{this.renderButton()}</CardSection>
			</Card>
		);
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner />;
		} else {
			return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
		}
	}
}

const styles = StyleSheet.create({
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
});

export default LoginForm;
