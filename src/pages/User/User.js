import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PostProfile, PutProfile } from '../../services/Profile';
import { useState, useEffect } from 'react';
// import { setName } from '../../store';
import { useRef } from 'react';
import { setName } from '../../actionCreator';

const firstNameSelector = (state) => state.firstName;
const lastNameSelector = (state) => state.lastName;

function User() {
	const dispatch = useDispatch();
	const firstName = useSelector(firstNameSelector);
	const lastName = useSelector(lastNameSelector);
	const [form, setForm] = useState(0);
	const token = useSelector((state) => state.token);
	const lastNameRef = useRef(lastName);
	const firstNameRef = useRef(firstName);

	useEffect(() => {
		PostProfile(token)
			.then((res) => {
				dispatch(setName(res.body.firstName, res.body.lastName));
			})
			.catch((err) => {
				console.log(err);
			});
	}, [token, dispatch]);

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
					<Link
						className="main-nav-item"
						to="/"
						onClick={() => {
							dispatch({
								type: 'LOGOUT',
							});
						}}
					>
						<i className="fa fa-user-circle"></i>
						Sign Out
					</Link>
				</div>
			</nav>

			<main className="main bg-dark">
				<div className="header">
					<h1>
						Welcome back
						<br />
						{firstName} {lastName} !
					</h1>
					<button
						style={{ display: form ? 'none' : 'initial' }}
						className="edit-button"
						onClick={() => {
							setForm(1);
						}}
					>
						Edit Name
					</button>
					<div className="form" style={{ display: form ? 'block' : 'none' }}>
						<div className="profile">
							<input
								ref={firstNameRef}
								type="text"
								placeholder={firstName}
								// value={firstName}
								defaultValue={firstName}
								className="firstname"
								// onInput={(e) => {
								// 	dispatch(setName(e.target.value));
								// }}
							/>
							<input
								ref={lastNameRef}
								type="text"
								placeholder={lastName}
								// value={lastName}
								defaultValue={lastName}
								className="lastname"
								// onInput={(e) => {
								// 	dispatch(setName(undefined, e.target.value));
								// }}
							/>
						</div>
						<div className="actions">
							<button
								className="save-button"
								onClick={() => {
									return (
										PutProfile(
											firstNameRef.current.value,
											lastNameRef.current.value,
											token
										)
											// .then(() => {
											// 	dispatch(setName(firstName, lastName));
											// 	setForm(0);
											// })
											.then(() => {
												return PostProfile(token).then((res) => {
													dispatch(
														setName(res.body.firstName, res.body.lastName)
													);
													setForm(0);
												});
											})
											.catch((err) => {
												console.log(err);
											})
									);
								}}
							>
								Save
							</button>
							<button className="cancel-button" onClick={() => setForm(0)}>
								Cancel
							</button>
						</div>
					</div>
				</div>
				<h2 className="sr-only">Accounts</h2>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Checking (x8349)</h3>
						<p className="account-amount">$2,082.79</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Savings (x6712)</h3>
						<p className="account-amount">$10,928.42</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
						<p className="account-amount">$184.30</p>
						<p className="account-amount-description">Current Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
			</main>
			<footer className="footer">
				<p className="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</>
	);
}

export default User;
