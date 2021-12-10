import React, { useRef, useState } from "react";
import axios from "axios";

const Avatar = (props:any) => {

    const {changeHeaderAvatar} = props;

    const avatarRef = useRef<HTMLInputElement>(null)
    const [avatarTitle, setAvatarTitle] = useState<string>("");

    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const changeAvatar = async () => {
        if (!avatarRef.current?.files) {
            return;
        }
        let formData = new FormData();
        formData.append("file", avatarRef.current.files[0]);
        await axios.post('/profile/changeavatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            const link = response.data;
            let user = JSON.parse(localStorage.getItem('user') || '{}');
            user.avatar = link;
            localStorage.setItem('user', JSON.stringify(user));
            changeHeaderAvatar(link);
            setSuccess(true);
        }).catch(() => {
            setSuccess(false);
        });
    }

    return (
                <div className="ProfileSettingsContent">
                    <div className="ProfileSettingsHeadline">Change Avatar</div>
                    <input 
                        ref={avatarRef} 
                        type="file"
                        accept="image/*"
                        onChange={() => {
                            if (avatarRef.current?.files) {
                                setAvatarTitle(avatarRef.current.files[0].name)
                                setError(false);
                                setSuccess(false);
                            }
                        }}
                        className="ProfileSettingsInputFile"
                    />
                    <div
                        className="ProfileSettingsInputByDiv"
                        onClick={() => avatarRef.current?.click() }
                    >
                        {
                            avatarTitle ? 
                                avatarTitle :
                                "Select New Avatar"
                        }
                    </div>
                    <div className="ProfileSettingsButtonSection">
                        <button
                            className="ProfileSettingsButton"
                            onClick={() => changeAvatar()}
                        >
                            Change!
                        </button>
                    </div>
                    {
                    success ?
                        <div className="ProfileSettingsResultSection">
                            <div className="ProfileSettingsSuccessBlock">
                                Avatar was changed!
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

export default Avatar;