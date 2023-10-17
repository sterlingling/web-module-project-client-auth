import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [cred, setCred] = useState({
        username: '',
        password: ''
    })

    const handleChange = (evt) => {
        console.log(cred)
        // console.log(evt)
        setCred({ ...cred, [evt.target.name]: evt.target.value })
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                navigate('/friends')
            }).catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>login</h1>
            <label>USERNAME</label>
            <input onChange={handleChange} name='username' placeholder='User Name' type='text'></input>
            <label>PASSWORD</label>
            <input onChange={handleChange} name='password' placeholder='Password' type='password'></input>
            <button>SUBMIT</button>
        </form>
    )
}
export default Login;