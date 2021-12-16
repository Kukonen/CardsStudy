import React, {useState} from 'react';
import '../CreateBlocks.scss';

const Text = () => {

    const [text, setText] = useState<string>("");

    return (
        <div>
            <div className="CreateInputBlocksSection">
                <div className="CreateInputBlocksBlock">
                    <input
                        type="text"
                        className="CreateInput"
                        value={text}
                        onChange={event => setText(event.target.value)}
                    />
                </div>
            </div>

        </div>
    )
}

export default Text;