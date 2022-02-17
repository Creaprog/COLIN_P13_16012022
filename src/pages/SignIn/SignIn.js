import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { reqAuth } from '../../services/auth';

function SignInt() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	reqAuth().then((res) => {
	// 		dispatch.signIn(res.body.token);
	// 	});
	// }, []);
	// console.log(useSelector((state) => state.token));
	// useSelector((state) => {
	// 	console.log('State: ', state.token);
	// });

	return (
		<>
			<nav className="main-nav">
				<Link to="/" className="main-nav-logo">
					<img
						className="main-nav-logo-image"
						src="/img/argentBankLogo.png"
						alt="Argent Bank Logo"
					/>
					<h1 className="sr-only">Argent Bank</h1>
				</Link>
				<div>
					<Link className="main-nav-item" to="/SignIn">
						<i className="fa fa-user-circle"></i>
						Sign In
					</Link>
				</div>
			</nav>

			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form>
						<div className="input-wrapper">
							<label for="username">Username</label>
							<input
								type="text"
								id="username"
								value={username}
								onInput={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="input-wrapper">
							<label for="password">Password</label>
							<input
								type="password"
								id="password"
								value={password}
								onInput={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" />
							<label for="remember-me">Remember me</label>
						</div>
						{/* PLACEHOLDER DUE TO STATIC SITE */}
						<Link
							to="/user"
							className="sign-in-button"
							onClick={() => {
								reqAuth(username, password)
									.then((res) => {
										dispatch({
											type: 'SIGNIN',
											payload: {
												token: res.body.token,
											},
										});
									})
									.catch((err) => {
										console.log(err);
									});
							}}
						>
							Sign In
						</Link>
						{/* <!-- SHOULD BE THE BUTTON BELOW --> */}
						{/* <!-- <button className="sign-in-button">Sign In</button> -->
          <!--  --> */}
					</form>
				</section>
			</main>
			<footer className="footer">
				<p className="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</>
	);
}

export default SignInt;
