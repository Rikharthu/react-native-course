import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from '../actions/types';

export const emailChanged = text => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = text => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const userLoggedIn = () => {
	return { type: LOGIN_USER };
};

export const loginUser = ({ email, password }) => {
	// Redux-Thunk will invoke this function
	// We need to use passed 'dispatch' function to dispatch our action
	return dispatch => {
		dispatch({ type: LOGIN_USER });

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(() =>
				firebase.auth().createUserWithEmailAndPassword(email, password)
			)
			.then(user => {
				dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
				Actions.main();
			})
			.catch(() => dispatch({ type: LOGIN_USER_FAIL }));
	};
};

export * from './EmployeeActions';
