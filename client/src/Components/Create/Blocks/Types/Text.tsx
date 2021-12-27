import React, {useEffect, useState} from 'react';
import '../CreateBlocks.scss';

const Text = (props:any) => {

    const {changeAnswer, answer} = props;

    const [text, setText] = useState<string>("");

    useEffect(() => {
        setText(answer)
    }, [])

    return (
        <div>
            <div className="CreateInputBlocksSection">
                <div className="CreateInputBlocksBlock">
                    <input
                        type="text"
                        className="CreateInput"
                        value={text}
                        onChange={event => {
                            setText(event.target.value);
                            changeAnswer(event.target.value);
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default Text;