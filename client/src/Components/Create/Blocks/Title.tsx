import React, { useState } from 'react';

const Title = (props:any) => {
    const [title, setTitle] = useState("");

    return (
        <div>
            <input type="text"
                value={title}
                onChange={event => {
                    setTitle(event.target.value);
                }}
            />
        </div>
    )
}

export default Title;