import data from './LibraryList.json';

export default (state, action) => {
	console.log('LibraryReducer handling action: ', action);
	console.log('state: ', state);
	return data;
};
