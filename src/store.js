import { createStore } from 'redux';
import produce from 'immer';

const initialState = {
	token: localStorage.getItem('token') || null,
	firstName: '',
	lastName: '',
};

function reducer(state = initialState, action) {
	return produce(state, (draft) => {
		switch (action.type) {
			case 'SIGNIN':
				return produce(state, (draft) => {
					if (action.payload.rememberRef) {
						localStorage.setItem('token', action.payload.token);
					}
					draft.token = action.payload.token;
				});
			case 'LOGOUT':
				return produce(state, (draft) => {
					if (localStorage.getItem('token')) {
						localStorage.removeItem('token');
					}
					draft.token = null;
				});
			case 'SET_NAME':
				return produce(state, (draft) => {
					draft.firstName = action.payload.firstName || draft.firstName;
					draft.lastName = action.payload.lastName || draft.lastName;
				});
			default:
				return draft;
		}
	});
}

export const store = createStore(reducer, initialState);
