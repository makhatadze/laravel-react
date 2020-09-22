import axios from 'axios';
import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR} from "./types";
import {setAlert} from "./alert";
import setAuthToken from "../utils/setAuthToken";
const baseUrl = 'http://127.0.0.1:8000/api';


// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get(`${baseUrl}/profile`);
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
        debugger
        dispatch({
            type: AUTH_ERROR
        })
    }
}


// Register User
export const register = ({name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password})

    try {
        const res = await axios.post(`${baseUrl}/register`,body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        let errors = JSON.parse(err.response.data)
        if (errors) {
            dispatch(setAlert(errors.email[0],'danger'));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }

}