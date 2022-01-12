import React, {useEffect, useState} from 'react';
import '../CreateBlocks.scss';
import InputText from "../../../../Components/InputText/InputText";

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
                    <textarea
                        value={text}
                        onChange={event => {
                            setText(event.target.value);
                            changeAnswer(event.target.value);
                        }}
                        placeholder="Answer of this card"
                        className="CreateInputTextarea"
                    />
                </div>
            </div>

        </div>
    )
}

export default Text;