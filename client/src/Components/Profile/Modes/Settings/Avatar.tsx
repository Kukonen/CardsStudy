import React, { useState } from "react";

const Avatar = () => {

    const [name, setName] = useState("");

    return (
                <div className="ProfileSettingsContent">
                    <div className="ProfileSettingsHeadline">Change Name</div>
                    <input 
                        type="text"
                        onChange={event => setName(event.target.value)}
                        value={name}
                        placeholder="write new name"
                        className="ProfileSettingsInput"
                    />
                    <div className="ProfileSettingsButtonSection">
                        <button
                            className="ProfileSettingsButton"
                            onClick={() => {}}
                        >
                            Change!
                        </button>
                    </div>
                </div>
    )
}

export default Avatar;