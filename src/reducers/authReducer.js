import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS} from '../actions/types';

const initialState = {
    isAuthenticated: null,
    username: '',
};

export default function userReducer(state = initialState, action, payload){
    switch(action.type){
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
            };
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                id: null,
                username: null
            };
        default:
            return state;
    }
}