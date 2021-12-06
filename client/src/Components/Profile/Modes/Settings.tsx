import React, { useState } from "react";
import './ProfileModes.scss';

const Settings = () => {
    
    type ModeType = "name" | "avatar" | "password" 
    const [mode, setMode] = useState<ModeType>("name");

    return (
        <div className="ProfileSettings">
            <div className="ProfileSideBar-Section">
                <div className="ProfileSideBar-Block">
                    <div 
                        className= {mode === 'name' ? "ProfileSideBarItemActive" :  "ProfileSideBarItem"}
                        onClick={() => setMode('name')}
                    >
                        Change Name
                    </div>
                    <div 
                        className= {mode === 'avatar' ? "ProfileSideBarItemActive" :  "ProfileSideBarItem"}
                        onClick={() => setMode('avatar')}
                    >
                        Change Avatar
                    </div>
                    <div 
                        className= {mode === 'password' ? "ProfileSideBarItemActive" :  "ProfileSideBarItem"}
                        onClick={() => setMode('password')}
                    >
                        Change Password
                    </div>
                </div>
            </div>
            <div className="ProfileContent">

            </div>
        </div>
    )
}

export default Settings;