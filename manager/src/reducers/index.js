import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
	// prop keyword here represents the state prop the reducer produces
	banana: (state, action) => {
		console.log('Running banana reduer for action:', action);
		return [];
	},
	auth: AuthReducer,
	employeeForm: EmployeeFormReducer,
	employees: EmployeeReducer
});
