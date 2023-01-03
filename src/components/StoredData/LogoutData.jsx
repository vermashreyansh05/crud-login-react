import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    let navigate = useNavigate()
    const getLogout = () => {

        localStorage.clear()
        navigate('/Login')
    }

    return (
        <>
        <button type="button" onClick={getLogout} class="btn btn-danger">Logout</button>
        </>
    )
}


export default Logout;