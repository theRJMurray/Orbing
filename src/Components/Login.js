import {useState} from 'react'
import Button from './styled/Button'
import { useDispatch } from 'react-redux'
import { login } from '../actions/authActions';

const input_styles = {
	height: 30,
	padding: 8,
	margin: 10
}

const Login = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChange = (e) => setUsername(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    const handleOnSubmit = (e) => {
        console.log('Login Submited')
        e.preventDefault();
    
        // Create user object
        const user = {
          username,
          password
        };

        console.log('user in Login.js', user)
    
        dispatch(login(user));
      };

    return <div style={{width: '50%', margin: '100px auto'}}>
        <h1 style={{textAlign: 'center', color: 'white'}}>Login</h1>
        <form onSubmit={handleOnSubmit}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input style={input_styles} type="text" name="username" value={username} placeholder="username" onChange={onUsernameChange}/>
                <input style={input_styles} type="password" name="password" value={password} placeholder="password" onChange={onPasswordChange}/>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <Button style={{width: '50%', marginTop: 10, background: '#000', color: '#DBE4EE'}}>Login</Button>
            </div>
        </form>
    </div>
}

export default Login;