import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import { useSelector } from 'react-redux';

function App() {
	const token = useSelector((state) => state.token);
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="/SignIn"
				element={token === 'null' || token === null ? <SignIn /> : <User />}
			/>
			<Route
				path="/User"
				element={token === 'null' || token === null ? <SignIn /> : <User />}
			/>
		</Routes>
	);
}

export default App;
