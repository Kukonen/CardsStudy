import React from 'react';
import './App.scss';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

const App = () => {
    return (
        <div id="App">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default App;