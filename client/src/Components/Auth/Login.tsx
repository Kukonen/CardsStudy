import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import './Auth.scss';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);
    const [done, setDone] = useState(false);

    const Send = () => {
        if (email === "" || password === "") {
            return;
        }

        axios.post('/auth/login').then(response => {
            setError(false);
            localStorage.setItem('auth', 'auth');
            const user = {
                name: response.data.name,
                status: response.data.status
            };
            localStorage.setItem('user', JSON.stringify(user));
            setDone(true);
        }).catch(e => {
            setError(true);
            localStorage.setItem('auth', 'notauth');
        })
    }

    return (
        <div className="Auth">
            <div className="AuthSection">
                <div className="AuthHeadline">Sign In</div>
                <input type="email" 
                    className="AuthInput"
                    value={email}
                    onChange={event => {
                        setError(false);
                        setEmail(event.target.value);
                    }}
                    placeholder="email"
                />
                <input type="password" 
                    className="AuthInput"
                    value={password}
                    onChange={event => {
                        setError(false);
                        setPassword(event.target.value);
                    }}
                    placeholder="password"
                />
                <div className="AuthButtonSection">
                    <div className="AuthButton"
                        onClick={() => Send()}
                    >Send</div>
                </div>
            </div>
            <div className="AuthErrorSection"
                style={{
                    display: error ? "flex" : "none"
                }}
            >
                <div className="AuthError">That's Wents Wrong! </div>
            </div>
            {
                done ?
                    <Navigate to='/' /> :
                    null
            }
        </div>
    )
}

export default Login;