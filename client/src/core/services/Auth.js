import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';

export const register = newUser => {
    return axios
        .post(`${baseUrl}/register`, newUser, {
            headers: {'Content-type': 'application/json'}
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios
        .post(`${baseUrl}/login`, {
            email: user.email,
            password: user.password
        }, {
            headers: {'Content-type': 'application/json'}
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = () => {
    console.log(localStorage.getItem('usertoken'))
    return axios
        .get(`${baseUrl}/profile`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('usertoken')}`}
        })
        .then(res => {
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}