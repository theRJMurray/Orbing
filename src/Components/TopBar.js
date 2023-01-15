import { useNavigate  } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions'

const TopBar = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return <div style={{width: '100%', height: 80, background: '#202020', display: 'flex', justifyContent: 'space-between'}}>
        {auth && auth.username ? <div onClick={() => navigate('/login')} style={{ width: '50%', color: 'white', paddingTop: 25, fontSize: '1.5em', marginLeft: 20, cursor: 'pointer'}}>
            Welcome, {auth.username}
        </div> : null}
        {auth && !auth.isAuthenticated ? <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
            <div onClick={() => navigate('/login')} style={{ color: 'white', paddingTop: 25, fontSize: '1.5em', marginRight: 20, cursor: 'pointer'}}>
            Login
            </div>
            <div onClick={() => navigate('/register')} style={{ color: 'white', paddingTop: 25, fontSize: '1.5em', marginRight: 20, cursor: 'pointer'}}>
            Register
            </div> 
        </div> :
        <div onClick={() => dispatch(logout())} style={{ color: 'white', paddingTop: 25, fontSize: '1.5em', marginRight: 20, cursor: 'pointer', display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
            Logout
        </div>}
    </div>
}

export default TopBar;