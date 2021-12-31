import React, { useState } from "react";
import '../ProfileModes.scss';
import Avatar from "./Avatar";
import Name from "./Name";
import Password from "./Password";

const Settings = (props:any) => {

    const {changeHeaderName, changeHeaderAvatar} = props;
    
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
                {
                    mode === 'name' ? <Name changeHeaderName={(name:string) => changeHeaderName(name)}/> :
                    mode === 'avatar' ? <Avatar changeHeaderAvatar={(avatar: string) => changeHeaderAvatar(avatar)}/> :
                    mode === 'password' ? <Password /> :
                    null
                }
            </div>
        </div>
    )
}

export default Settings;