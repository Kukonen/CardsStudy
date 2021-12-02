import React from 'react';
import './Content.scss';
import { Routes, Route } from "react-router-dom";

import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Profile from '../Profile/Profile';

const Content = () => {
    return (
        <div>
            <Routes>
                <Route  path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/profile' element={<Profile />}/>
            </Routes>
        </div>
    )
}

export default Content;