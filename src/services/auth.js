export function reqAuth(username, password) {
	return fetch('http://localhost:3001/api/v1/user/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: username,
			password: password,
		}),
	}).then((res) => res.json());
}
