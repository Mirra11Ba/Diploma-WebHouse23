import React from 'react';
import {useLocation, useNavigate, Navigate} from 'react-router-dom';
import user from "../../store/user";


const OAuth2RedirectHandler = () => {

    const location = useLocation();
    console.log(window.location.toString().split('=')[1]);
    localStorage.setItem('token',window.location.toString().split('=')[1])
    user.checkAuth()

    return (
        <Navigate to={"/"}/>
    );
};

export default OAuth2RedirectHandler;