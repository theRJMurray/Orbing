import { useNavigate  } from 'react-router-dom'

const TopBar = () => {
    const navigate = useNavigate();
    
    return <div style={{width: '100%', height: 80, background: '#202020'}}>
        <div onClick={() => navigate('/login')} style={{float: 'right', color: 'white', marginTop: 25, fontSize: '1.5em', marginRight: 20, cursor: 'pointer'}}>
            Login
        </div>
        <div onClick={() => navigate('/register')} style={{float: 'right', color: 'white', marginTop: 25, fontSize: '1.5em', marginRight: 20, cursor: 'pointer'}}>
            Register
        </div>
    </div>
}

export default TopBar;