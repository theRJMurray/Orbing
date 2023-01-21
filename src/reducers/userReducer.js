import {SET_LOCATION} from '../actions/types';
import Raeglin from '../imgs/raeglin.png'

const initialState = {
    level: 1,
    experience: 0,
    location: {name: 'Raeglin', image: Raeglin}
}

export default function userReducer(state = initialState, action, payload){
    switch(action.type){
        case SET_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        default:
            return state;
    }
}