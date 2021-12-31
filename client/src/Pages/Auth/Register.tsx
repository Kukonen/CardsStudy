import React, {useState} from "react";
import axios from "axios";
import './Auth.scss';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);
    const [done, setDone] = useState(false);

    const Send = () => {
        if (name === "" || email === "" || password === "") {
            return;
        }

        axios.post('/auth/register', {
            name,
            email, 
            password
        }).then(response => {
            setError(false);
            localStorage.setItem('auth', 'auth');
            const user = {
                name: response.data.name,
                avatar: response.data.avatar,
                role: response.data.role
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
                <div className="AuthHeadline">Sign Up</div>
                <input type="text" 
                    className="AuthInput"
                    value={name}
                    onChange={event => {
                        setError(false);
                        setName(event.target.value);
                    }}
                    placeholder="name"
                />
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
                    <button className="AuthButton"
                        onClick={() => Send()}
                    >Send</button>
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
                    document.location.href="/" :
                    null
            }
        </div>
    )
}

export default Register;