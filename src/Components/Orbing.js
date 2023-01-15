import Orb1 from '../imgs/orb1.png'
import Progress from './Progress'
import { useState } from 'react'

const Orbing = () => {
    const [collecting, setCollecting] = useState('');

    return <div>
        <div onClick={collecting === 'Normal Orb' ? () => setCollecting('') : () => setCollecting('Normal Orb')} style={{width: 250, height: 250, background: '#505050', margin: '10px 0 0 10px'}}>
            <div style={{height: 80, width: 80, margin: '0px auto'}}>
                <img src={Orb1} alt="" style={{height: 80, width: 80, marginTop: 40}} />
            </div>
            <div style={{textAlign: 'center', marginTop: 40}}>
                <div>Collect</div>
                <div>Normal Orb</div>
                <div>10 XP / 2 seconds</div>
            </div>
            <div style={{margin: '0px auto', width: 102}}>
                <Progress collecting={collecting}/>
            </div>
            
        </div>
    </div>
}

export default Orbing;