import { SET_PHASE } from "./types";

//SET PHASE
export const setPhase = (phase) => (dispatch) => {
    dispatch({
        type: SET_PHASE,
        payload: phase
    })
}