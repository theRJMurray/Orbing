import {useState} from 'react'
import Button from './styled/Button'
import { register } from '../actions/authActions';
import { useDispatch } from 'react-redux'

const input_styles = {
	height: 30,
	padding: 8,
	margin: 10
}

const Register = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChange = (e) => setUsername(e.target.value);
    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    const handleOnSubmit = (e) => {
        e.preventDefault();
    
        // Create user object
        const user = {
        username,
          email,
          password
        };
    
        dispatch(register(user))
    }

    return <div style={{width: '50%', margin: '100px auto'}}>
    <h1 style={{textAlign: 'center', color: 'white'}}>Register</h1>
        <form onSubmit={handleOnSubmit}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input style={input_styles} type="text" name="username" value={username} placeholder="username" onChange={onUsernameChange}/>
                <input style={input_styles} type="text" name="email" value={email} placeholder="email" onChange={onEmailChange}/>
                <input style={input_styles} type="password" name="password" value={password} placeholder="password" onChange={onPasswordChange}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <Button style={{width: '50%', marginTop: 10, background: '#000', color: '#DBE4EE'}}>Register</Button>
            </div>
        </form>
    </div>
}

export default Register;