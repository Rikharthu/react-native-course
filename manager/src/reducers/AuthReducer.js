import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
};

// If redurces return the same object (newState === oldState), thus nothing changed
// then redux won't notify any Components

export default (state = INITIAL_STATE, action) => {
	console.log('AuthReducer handling action:', action);
	console.log('AuthReducer state:', state);
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				...INITIAL_STATE, // reset to initial state
				user: action.payload
			};
		case LOGIN_USER_FAIL:
			return {
				...state,
				user: null,
				error: 'Authentication Failed',
				password: '',
				loading: false
			};
		default:
			// Nothing changed
			return state;
	}
};
