import { createStore } from 'redux';
import produce from 'immer';

const initialState = {
	token: localStorage.getItem('token'),
	test: 'test',
};

export const signIn = (token) => ({
	type: 'SIGNIN',
	payload: {
		token: token,
	},
});

export const logout = () => ({ type: 'LOGOUT' });

function reducer(state = initialState, action) {
	return produce(state, (draft) => {
		switch (action.type) {
			case 'SIGNIN':
				return produce(state, (draft) => {
					localStorage.setItem('token', action.payload.token);
					draft.token = action.payload.token;
				});
			case 'LOGOUT':
				return produce(state, (draft) => {
					localStorage.setItem('token', null);
					draft.token = null;
				});
			default:
				return draft;
		}
	});
}

export const store = createStore(reducer, initialState);
