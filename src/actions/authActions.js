import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS} from "./types";
import axios from 'axios';

export const register = (user) => (dispatch) => {
    axios.post('http://localhost:4000/api/auth/signup', user)
        .then(response => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: REGISTER_FAIL
            });
            console.log(error);
        });
}

export const login = (user) => dispatch => {
    axios.post('http://localhost:4000/api/auth/signin', user)
        //dispatch to the authReducer
        .then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
           })
        }
        ).catch(err => {
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

export const logout = () => {
    return{
        type: LOGOUT_SUCCESS
    }
}