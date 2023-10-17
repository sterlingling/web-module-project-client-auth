import React, { useState } from "react"
import { axiosWithAuth } from "../util/axiosWithAuth";
import { useNavigate } from "react-router-dom";



const AddFriends = () => {
    const navigate = useNavigate();
    const [friendInfo, setFriendInfo] = useState({ name: '', email: '' })
    const onSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:9000/api/friends', friendInfo)
            .then(res => {
                console.log(res)
                navigate('/friends')
            }).catch(err => console.log(err))

    }

    const handleChange = (e) => {
        setFriendInfo({ ...friendInfo, [e.target.name]: e.target.value })
    }


    return (
        <form onSubmit={onSubmit}>
            <h1>add friend</h1>
            <label>Friend Name</label>
            <input onChange={handleChange} name="name" id='name' type='text'></input>
            <label>Friend Email</label>
            <input onChange={handleChange} name="email" id="email" type='email' />
            <button>Submit</button>
        </form>

    )
}

export default AddFriends;