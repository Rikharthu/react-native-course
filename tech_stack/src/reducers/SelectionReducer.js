export default (state = null, action) => {
	console.log('SelectionReducer handling action:', action);
	console.log('state: ', state);
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default:
			return state;
	}
};
