import React from "react";

const Logout = () => {
    const handleClick = () => {
        localStorage.clear();
    }
    return (
        <button onClick={handleClick}>Logout</button>
    )
}

export default Logout;