import React, { useState } from 'react';
import './Profile.scss';

import Favorite from './Modes/Favorite';
import MyPage from './Modes/MyPage';
import Settings from './Modes/Settings/Settings';

import Avatar from './Avatar.png';

interface IUser {
    name?: string;
    avatar?: string;
    role?: string;
}

const Profile = () => {

    type profileModes = 'favorite' | 'myPage' | 'settings';
    const [profileMode, setProfileMode] = useState<profileModes>('favorite');

    const user:IUser =  (JSON.parse(localStorage.getItem('user') as string));
    const [name, setName] = useState<string>(user.name || "");

    const changeHeaderName = (newName:string) => {
        setName(newName);
    }

    if (localStorage.getItem('auth') !== 'auth') {
        return null;
    }

    return (
        <div id="Profile">
            <div id="ProfileHeader">
                <div className="ProfileHeaderAvatarBlock">
                    <img 
                        src={user.avatar ? user.avatar : Avatar} 
                        alt="avatar" 
                        className="ProfileHeaderAvatar"
                    />
                </div>
                <div className="ProfileHeaderName">
                    {name}
                </div>
                <div 
                    className= {profileMode === 'favorite' ? "ProfileHeaderBlockActive" : "ProfileHeaderBlock"}
                    onClick={() => setProfileMode('favorite')}
                >
                    Favorite
                </div>
                <div 
                    className= {profileMode === 'myPage' ? "ProfileHeaderBlockActive" : "ProfileHeaderBlock"}
                    onClick={() => setProfileMode('myPage')}
                >
                    My Page
                </div>
                <div 
                    className= {profileMode === 'settings' ? "ProfileHeaderBlockActive" : "ProfileHeaderBlock"}
                    onClick={() => setProfileMode('settings')}
                >
                    Settings
                </div>
            </div>
            <div id="ProfileContent">
            {
                profileMode === 'favorite' ?
                    <Favorite /> : 
                profileMode === 'myPage' ?
                    <MyPage /> :
                profileMode === 'settings' ?
                    <Settings changeHeaderName={(name:string) => changeHeaderName(name)}/> :
                null
            }
            </div>
        </div>
    )
}

export default Profile;