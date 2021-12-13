import React, { useState } from 'react';
import './CreateBlocks.scss';

const Title = (props:any) => {
    const [title, setTitle] = useState("");

    return (
        <div id="CreateTitle">
            <input type="text"
                value={title}
                onChange={event => {
                    setTitle(event.target.value);
                }}
                className="CreateInput"
                placeholder="Title of Cards"
            />
        </div>
    )
}

export default Title;