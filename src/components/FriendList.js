import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../util/axiosWithAuth";
import { useNavigate } from "react-router-dom";


const FriendList = () => {
    const navigate = useNavigate();
    const [friend, setFriend] = useState([]);



    useEffect(() => {
        axiosWithAuth().get('http://localhost:9000/api/friends')
            .then(res => {
                console.log(res)
                setFriend(res.data)
            }).catch(err => {
                console.log(err);
                navigate('/login')
            })
    }, [])


    return (
        <div>
            <h1>FriendList</h1>
            <ul>
                {friend.map((fr) => (
                    <li key={fr.id}> {fr.name} - {fr.email} </li>
                ))}
            </ul>
        </div>
    )

}
export default FriendList;