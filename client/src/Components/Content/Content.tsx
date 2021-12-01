import React from 'react';
import './Content.scss';
import { Routes, Route } from "react-router-dom";

import Login from "../Auth/Login";
import Register from "../Auth/Register";

const Content = () => {
    return (
        <div>
            <Routes>
                <Route  path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
            </Routes>
        </div>
    )
}

export default Content;