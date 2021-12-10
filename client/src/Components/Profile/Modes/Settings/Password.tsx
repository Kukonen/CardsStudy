import axios from "axios";
import React, { useState } from "react";

const Password = () => {

    const [password, setPassword] = useState("");
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const changePassword = async () => {
        if (password === "") {
            return;
        }

        await axios.post('/profile/changepassword', {password}).then(response => {
            setSuccess(true);
        }).catch(() => {
            setError(false);
        })
    }

    return (
                <div className="ProfileSettingsContent">
                    <div className="ProfileSettingsHeadline">Change Password</div>
                    <input 
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                        placeholder="write new password"
                        className="ProfileSettingsInput"
                    />
                    <div className="ProfileSettingsButtonSection">
                        <button
                            className="ProfileSettingsButton"
                            onClick={() => changePassword()}
                        >
                            Change!
                        </button>
                    </div>
                    {
                    success ?
                        <div className="ProfileSettingsResultSection">
                            <div className="ProfileSettingsSuccessBlock">
                                Check Your Email
                            </div>
                        </div> :
                        null
                }
                {
                    error ?
                        <div className="ProfileSettingsResultSection">
                            <div className="ProfileSettingsErrorBlock">
                                That's Wents Wrong!
                            </div>
                        </div> :
                        null
                }
                </div>
    )
}

export default Password;