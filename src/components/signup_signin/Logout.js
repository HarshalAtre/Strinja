import React from "react";
import {Route, Routes} from 'react-router-dom';
import Maincomp from '../home/Maincomp';

export default function Logout ({isAuth,handleSignOut}){
    handleSignOut();
    return(
        <Routes>
            <Route path="/" element={<Maincomp/>}/>
        </Routes>
    )
} 