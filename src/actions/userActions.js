import { SET_PHASE, SET_LOCATION } from "./types";

//SET PHASE
export const setPhase = (phase) => (dispatch) => {
    dispatch({
        type: SET_PHASE,
        payload: phase
    })
}

export const setLocation = (location) => (dispatch) => {
    dispatch({
        type: SET_LOCATION,
        payload: location
    })
}