import React from 'react';
import './Content.scss';
import { Routes, Route } from "react-router-dom";

import Login from "../../Pages/Auth/Login";
import Register from "../../Pages/Auth/Register";
import Profile from '../../Pages/Profile/Profile';
import Create from '../../Pages/Create/Create';

const Content = () => {
    return (
        <div>
            <Routes>
                <Route  path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/create' element={<Create />}/>
            </Routes>
        </div>
    )
}

export default Content;