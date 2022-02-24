export function PostProfile(token) {
	return fetch('http://localhost:3001/api/v1/user/profile', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
}

export function PutProfile(firstName, lastName, token) {
	return fetch('http://localhost:3001/api/v1/user/profile', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
		body: JSON.stringify({
			firstName: firstName,
			lastName: lastName,
		}),
	});
}
