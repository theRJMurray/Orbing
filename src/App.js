import {useEffect, useState} from 'react';
import Explore from './Explore'
import Gary from './imgs/gary.png'

const App = () => {
  const [progress, setProgress] = useState(0);
  const [gary, setGary] = useState(0);
  const [page, setPage] = useState('Orbing')

	useEffect(() => {
		let interval = null;
		if (progress < 100) {
			interval = setInterval(() => {
				setProgress(prevProgress => prevProgress + 1);
			}, 50);
		} else {
			setProgress(0);
			setGary(gary + 1);
		}
		return () => clearInterval(interval);
	}, [progress, gary]);

 	let skills = [
		'Bank',
		'Orbing',
		'Gary'
	]

	const MenuItem = ({child, }) => {
		const [bgColor, setBgColor] = useState('#172A3A')

		return <div 
			onClick={() => {
				setPage(child)
				console.log(page);
			}}
			onMouseEnter={() => setBgColor('lightgray')}
			onMouseLeave={() => setBgColor('#172A3A')}
			style={{background: `${bgColor}`, color: 'white', userSelect: 'none', height: 60, fontSize: '1.5em', textAlign: 'center', paddingTop: 20, cursor: 'pointer'}}>
				{child}
			</div>
	}

 	return <div style={{color: '#202020', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, display: 'flex'}}>
		{/* Left Sidebar */}
		<div style={{height: '100%', width: 300, background: '#172A3A'}}>
  			{skills.map((e, i) => {
				return <MenuItem child={e} setPage={setPage} />
			})}
		</div>
		<Explore page={page} />

		{/* <img src={Gary} alt="" style={{width: 40, height: 40}} />
		<div style={{height: 40, width: 100, border: '1px solid black'}}>
			<div style={{height: 40, width: `${progress}%`, background: 'green'}}>

			</div>
		</div>
		<div>Garys: {gary}</div> */}
    </div>;
}

export default App;
