import React, {useState} from "react";
import './Header.scss';
import { Link } from "react-router-dom";

import DarkIcon from './dark.svg';
import LightIcon from './light.svg';

const Header = () => {

    type themeType = 'light' | 'dark' | null | undefined;
    type authType = 'auth' | 'notauth' | null | undefined;

    const [theme, setTheme] = useState<themeType>(localStorage.getItem('theme') as themeType);
    const [auth, setAuth] = useState<authType>(localStorage.getItem('auth') as authType || 'notauth');

    return (
        <div className="Header">
            <div className="TopHeader">
                <Link to='/' className="HeaderTitle">
                    Cards Study
                </Link>
                <div className="HeaderTheme">
                    <div className="HeaderThemeBlock">
                        <img src={LightIcon} alt="light" className="HeaderThemeImg" />
                    </div>
                    <div className="HeaderThemeBlock">
                        <img src={DarkIcon} alt="dark" className="HeaderThemeImg" />
                    </div>
                </div>
                <div className="HeaderLinks">
                    <Link to="/popular" className="HeaderLink">
                        Popular
                    </Link>
                    <Link to="/new" className="HeaderLink">
                        New
                    </Link>
                </div>
            </div>
            <div className="BottomHeader">
                <input type="text" className="HeaderFind" placeholder="Find Cards"/>
                <div className="HeaderProfile">
                {
                    auth === 'auth' ? 
                        <div className="HeaderProfileSection">
                            <Link to='/profile' className="HeaderProfileBlock">
                                    Profile
                                </Link>
                        </div> :
                            auth === 'notauth' ?
                                <div className="HeaderProfileSection">
                                    <Link to='/register' className="HeaderProfileBlock">
                                        Sign up
                                    </Link>
                                    <Link to='/login' className="HeaderProfileBlock">
                                        Sign in
                                    </Link>
                                </div> :
                                null
                }
                </div>
            </div>
        </div>
    )
}

export default Header;