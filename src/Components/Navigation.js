import { useNavigate  } from 'react-router-dom'
import { useState } from 'react'

const navStyles = {color: 'white', userSelect: 'none', height: 60, fontSize: '1.5em', textAlign: 'center', paddingTop: 20, cursor: 'pointer'};

const MenuItem = ({url, children}) => {
    const navigate = useNavigate();
    const [bgColor, setBgColor] = useState('#172A3A')

    return <div
        onClick={() => navigate(url)}
        onMouseEnter={() => setBgColor('lightgray')}
        onMouseLeave={() => setBgColor('#172A3A')}
        style={{...navStyles, background: `${bgColor}`}}>
            {children}
        </div>
}

const Navigation = () => {
    return <div style={{height: '100%', width: 300, background: '#172A3A'}}>
        <MenuItem url={'/explore'}>Explore</MenuItem>
        <MenuItem url={'/bank'}>Bank</MenuItem>
        <MenuItem url={'/orbing'}>Orbing</MenuItem>
    </div>
}

export default Navigation