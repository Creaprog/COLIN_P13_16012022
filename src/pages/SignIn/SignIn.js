import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { reqAuth } from '../../services/auth';
import { signIn } from '../../actionCreator';

function SignInt() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const rememberRef = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();
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
							<label htmlFor="username">Username</label>
							<input
								type="text"
								id="username"
								value={username}
								onInput={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								value={password}
								onInput={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="input-remember">
							<input type="checkbox" ref={rememberRef} id="remember-me" />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						{/* PLACEHOLDER DUE TO STATIC SITE */}

						<button
							className="sign-in-button"
							onClick={(e) => {
								e.preventDefault();
								reqAuth(username, password)
									.then((res) => {
										return dispatch(
											signIn(res.body.token, rememberRef.current.checked)
										);
									})
									.then(() => {
										navigate('/User');
									});
							}}
						>
							Sign In
						</button>
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
