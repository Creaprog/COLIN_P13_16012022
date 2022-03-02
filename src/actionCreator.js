export const setName = (firstName, lastName) => ({
	type: 'SET_NAME',
	payload: {
		firstName: firstName,
		lastName: lastName,
	},
});

export const signIn = (token) => ({
	type: 'SIGNIN',
	payload: {
		token: token,
	},
});

export const logout = () => ({ type: 'LOGOUT' });
