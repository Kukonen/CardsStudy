import React from 'react';
import './Content.scss';
import { Routes, Route } from "react-router-dom";

import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Profile from '../Profile/Profile';
import Create from '../Create/Create';

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