import {SET_PHASE} from '../actions/types';

const initialState = {
    phase: 'Orbing'
}

export default function userReducer(state = initialState, action, payload){
    switch(action.type){
        case SET_PHASE:
            return {
                ...state,
                phase: action.payload
            }
        default:
            return state;
    }
}