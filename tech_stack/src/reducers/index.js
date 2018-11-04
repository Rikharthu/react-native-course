import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// The combineReducers helper function turns an object whose values
// are different reducing functions into a single reducing function
// you can pass to createStore

export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});
