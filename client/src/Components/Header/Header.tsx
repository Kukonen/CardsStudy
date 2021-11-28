import React, {useState} from "react";
import './Header.scss';

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
                <div className="HeaderTitle">
                    Cards Study
                </div>
                <div className="HeaderTheme">
                    <div className="HeaderThemeBlock">
                        <img src={LightIcon} alt="light" className="HeaderThemeImg" />
                    </div>
                    <div className="HeaderThemeBlock">
                        <img src={DarkIcon} alt="dark" className="HeaderThemeImg" />
                    </div>
                </div>
                <div className="HeaderLinks">
                    <div className="HeaderLink">
                        Popular
                    </div>
                    <div className="HeaderLink">
                        New
                    </div>
                </div>
            </div>
            <div className="BottomHeader">
                <input type="text" className="HeaderFind" placeholder="Find Cards"/>
                <div className="HeaderProfile">
                {
                    auth === 'auth' ? 
                        <div className="HeaderProfileSection">
                            <div className="HeaderProfileBlock">
                                Profile
                            </div>
                        </div> :
                            auth === 'notauth' ?
                                <div className="HeaderProfileSection">
                                    <div className="HeaderProfileBlock">
                                        Sign up
                                    </div>
                                    <div className="HeaderProfileBlock">
                                        Sign in
                                    </div>
                                </div> :
                                null
                }
                </div>
            </div>
        </div>
    )
}

export default Header;