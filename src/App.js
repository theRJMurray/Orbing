import Orbing from './Components/Orbing.js'
import Navigation from './Components/Navigation.js'
import Bank from './Components/Bank.js'
import Explore from './Components/Explore.js'
import TopBar from './Components/TopBar.js'
import Home from './Components/Home.js'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import history from './history';

const App = () => {
 	return <div style={{color: '#202020', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, display: 'flex'}}>
		<Router location={history.location}>
			{/* Left Sidebar */}
			<Navigation />
			{/* Right Content Section */}
			<div style={{width: '100%', height: '100%', background: '#2F4858'}}>
				<TopBar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/explore" element={<Explore />} />
						<Route exact path="/bank" element={<Bank />} />
						<Route exact path="/orbing" element={<Orbing />} />
					</Routes>
			</div>
		</Router>
    </div>;
}

export default App;
