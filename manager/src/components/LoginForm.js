import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import {
	emailChanged,
	passwordChanged,
	loginUser,
	userLoggedIn
} from '../actions';
import firebase from 'firebase';

class LoginForm extends Component {
	componentWillMount() {
		// check if user is already authenticated
		console.log('current user: ', firebase.auth().currentUser);
		if (firebase.auth().currentUser) {
			this.props.userLoggedIn();
		}
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.errorTextStyle}>{this.props.error}</Text>
				</View>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return (
				<CardSection>
					<Spinner size="large" />
				</CardSection>
			);
		} else {
			return (
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>Login</Button>
				</CardSection>
			);
		}
	}

	render() {
		console.log('Email: ' + this.props.email);
		console.log('Password: ' + this.props.password);
		return (
			<Card>
				<CardSection>
					<Input
						label={'Email'}
						placeholder={'email@gmail.com'}
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						label={'Password'}
						placeholder={'Password'}
						secureTextEntry
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				{this.renderError()}

				{this.renderButton()}
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
});

const mapStateToProps = state => {
	console.log('Mapping state to props: ', state);
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading
	};
};

export default connect(
	mapStateToProps,
	{ emailChanged, passwordChanged, loginUser, userLoggedIn }
)(LoginForm);
