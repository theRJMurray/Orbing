import { useState, useEffect } from 'react'
import Gary from '../imgs/gary.png'


const Progress = () => {
    const [progress, setProgress] = useState(0);
    const [gary, setGary] = useState(0);
    
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
    
    return <div>
        <img src={Gary} alt="" style={{width: 40, height: 40}} />
        <div style={{height: 40, width: 100, border: '1px solid black'}}>
            <div style={{height: 40, width: `${progress}%`, background: 'green'}}>

            </div>
        </div>
        <div>Garys: {Gary}</div>
    </div>
}

export default Progress;