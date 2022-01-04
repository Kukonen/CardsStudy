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
                    <InputText
                        value={text}
                        onChange={event => {
                            setText(event.target.value);
                            changeAnswer(event.target.value);
                        }}
                        fontSize={18}
                        textAlgin={'center'}
                    />
                </div>
            </div>

        </div>
    )
}

export default Text;