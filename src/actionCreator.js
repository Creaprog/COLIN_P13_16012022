export const setName = (firstName, lastName) => ({
	type: 'SET_NAME',
	payload: {
		firstName: firstName,
		lastName: lastName,
	},
});

export const signIn = (token, rememberRef) => ({
	type: 'SIGNIN',
	payload: {
		token: token,
		rememberRef: rememberRef,
	},
});

export const logout = () => ({ type: 'LOGOUT' });
