import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <div id="App">
                <Header />
                <Content />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;