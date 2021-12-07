import React, { useState } from "react";
import axios from "axios";

const Name = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const changeName = () => {
        if (name === "") {
            return;
        }

        axios.post('/profile/changename', {name}).then(() => {
            setSuccess(true);
        }).catch(() => {
            setError(true);
        })
    }

    return (
                <div className="ProfileSettingsContent">
                    <div className="ProfileSettingsHeadline">Change Name</div>
                    <input 
                        type="text"
                        onChange={event => {
                            setError(false);
                            setSuccess(false);
                            setName(event.target.value)
                        }}
                        value={name}
                        placeholder="write new name"
                        className="ProfileSettingsInput"
                    />
                    <div className="ProfileSettingsButtonSection">
                        <button
                            className="ProfileSettingsButton"
                            onClick={() => changeName()}
                        >
                            Change!
                        </button>
                    </div>
                    {
                    error ?
                        <div className="ProfileSettingsResultSection">
                            <div className="ProfileSettingsSuccessBlock">
                                Name was changed!
                            </div>
                        </div> :
                        null
                }
                {
                    success ?
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

export default Name;