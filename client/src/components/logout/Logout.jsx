import "./logout.css";
import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const {user, dispatch} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleClick =() =>{
        dispatch({type : "LOGOUT"})
        navigate("/login")
    }
    return (
        <button onClick={handleClick} className="logout">Logout</button>
    );
};

export default Logout;