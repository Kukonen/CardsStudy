import React, { useState } from 'react';
import './Profile.scss';

import Favorite from './Modes/Favorite';
import MyPage from './Modes/MyPage';
import Settings from './Modes/Settings';


const Profile = () => {

    type profileModes = 'favorite' | 'myPage' | 'settings';

    const [profileMode, setProfileMode] = useState<profileModes>('favorite');

    return (
        <div id="Profile">
            <div id="ProfileHeader">
                <div 
                    className= {profileMode === 'favorite' ? "ProfileHeaderBlock" : "ProfileHeaderBlockActive"}
                    onClick={() => setProfileMode('favorite')}
                >
                    Favorite
                </div>
                <div 
                    className= {profileMode === 'myPage' ? "ProfileHeaderBlock" : "ProfileHeaderBlockActive"}
                    onClick={() => setProfileMode('myPage')}
                >
                    My Page
                </div>
                <div 
                    className= {profileMode === 'settings' ? "ProfileHeaderBlock" : "ProfileHeaderBlockActive"}
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
                    <Settings /> :
                null
            }
            </div>
        </div>
    )
}

export default Profile;