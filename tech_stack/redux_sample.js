const reducer = (state = { name: 'John' }, action) => {
	if (action.type == 'split_string') {
		const newResult = { split: action.payload.split('') };
		return Object.assign(state, newResult);
	} else if (action.type == 'add_character') {
		const newResult = { split: [...state.split, action.payload] };
		return Object.assign(state, newResult);
	}
	return state;
};
const store = Redux.createStore(reducer);

store.getState();

const action = {
	type: 'split_string',
	payload: 'asdf'
};

store.dispatch(action);

store.getState();

const action2 = {
	type: 'add_character',
	payload: 'a'
};

store.dispatch(action2);

store.getState();
