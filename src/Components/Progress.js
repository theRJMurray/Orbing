import { useState, useEffect } from 'react'

const Progress = ({collecting}) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
		let interval = null;
        if (collecting.length > 0){
            if (progress < 100) {
                interval = setInterval(() => {
                    setProgress(prevProgress => prevProgress + 1);
                }, 50);
            } else {
                setProgress(0);
            }
            return () => clearInterval(interval);
        }
	}, [progress, collecting]);
    
    return <div>
        <div style={{height: 40, width: 100, border: '1px solid black'}}>
            <div style={{height: 40, width: `${progress}%`, background: 'green'}}>

            </div>
        </div>
    </div>
}

export default Progress;