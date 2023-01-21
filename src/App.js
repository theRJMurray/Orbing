import Orbing from './Components/Orbing.js'
import Navigation from './Components/Navigation.js'
import Bank from './Components/Bank.js'
import NewExplore from './Components/NewExplore.js'
import TopBar from './Components/TopBar.js'
import {useEffect} from 'react'
import Home from './Components/Home.js'
import Login from './Components/Login.js'
// import axios from 'axios';
import { useSelector } from 'react-redux'
import Register from './Components/Register.js'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import history from './history';
import PrivateRoute from './Components/PrivateRoute.js'

const App = () => {
	const auth = useSelector(state => state.auth)

	useEffect(() => {
		console.log(auth, auth.isAuthenticated)
	}, [auth])

 	return <div style={{color: '#202020', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, display: 'flex'}}>
		<Router location={history.location}>
			{/* Left Sidebar */}
			<Navigation />
			{/* Right Content Section */}
			<div style={{width: '100%', height: '100%', background: '#2F4858'}}>
				<TopBar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/explore" element={<NewExplore />} />
						{/* <Route exact path="/bank" element={<PrivateRoute><Bank /></PrivateRoute>} />
						<Route exact path="/orbing" element={<PrivateRoute><Orbing /></PrivateRoute>} /> */}
						<Route exact path="/bank" element={<Bank />} />
						<Route exact path="/orbing" element={<Orbing />} />
						<Route exact path="/register" element={<Register />} />
						<Route exact path="/login" element={<Login />} />
					</Routes>
			</div>
		</Router>
    </div>;
}

export default App;
