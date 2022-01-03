import React, {useState} from "react";
import './Header.scss';
import axios from "axios";
import {Link} from "react-router-dom";

import DarkIcon from './dark.svg';
import LightIcon from './light.svg';

import Button from "../../Components/Button/Button";
import InputText from "../../Components/InputText/InputText";

const Header = (props: any) => {

    type authType = 'auth' | 'notauth' | null | undefined;

    const [auth, setAuth] = useState<authType>(localStorage.getItem('auth') as authType || 'notauth');

    const logOut = () => {
        axios.get('/auth/logout').then(() => {
            localStorage.removeItem('user');
            localStorage.setItem('auth', 'notauth');
            setAuth('notauth');
        }).catch(() => {

        })
    }

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
                <InputText fontSize={22} placeholder={"Find Cards"} />
                <div className="HeaderProfile">
                {
                    auth === 'auth' ? 
                        <div className="HeaderProfileSection">
                                <Button fontSize={18} link={'/create'}>
                                    Create Card
                                </Button>
                                <Button fontSize={18} link={'/profile'}>
                                    Profile
                                </Button>
                                <Button fontSize={18}
                                    onClick={ () => logOut()}
                                >
                                    Log out
                                </Button>
                        </div> :
                            auth === 'notauth' ?
                                <div className="HeaderProfileSection">
                                    <Button fontSize={18} link={'/register'}>
                                        Sign up
                                    </Button>
                                    <Button fontSize={18} link={'/login'}>
                                        Sign in
                                    </Button>
                                </div> :
                                null
                }
                </div>
            </div>
        </div>
    )
}

export default Header;