import React, {useEffect, useState} from 'react';
import '../CreateBlocks.scss';
import SelectImg from './select.svg';
import InputText from "../../../../Components/InputText/InputText";

const Block2 = (props:any) => {

    const {changeAnswer, answer} = props;

    const [block1, setBlock1] = useState<string>("");
    const [block2, setBlock2] = useState<string>("");

    type correctType = 1 | 2;
    const [correct, setCorrect] = useState<correctType>(1);

    useEffect(() => {
        if (!answer) {
            return;
        }

        setBlock1(answer.block1);
        setBlock2(answer.block2);
        setCorrect(answer.correct);

    }, [])

    return (
        <div>
            <div className="CreateInputBlocksSection">
                <div className="CreateInputBlocksBlock">
                    <div
                        onClick={() => {
                            setCorrect(1);
                            changeAnswer({
                                block1: block1,
                                block2: block2,
                                correct: 1
                            })
                        }}
                        className="CreateCorrectBlocks"
                    >
                        {
                            correct === 1 ?
                                <img
                                    src={SelectImg}
                                    alt="setected"
                                    className="CreateCorrectImgBlocks"
                                /> :
                                null
                        }
                    </div>
                    <input
                        type="text"
                        value={block1}
                        onChange={event => {
                            setBlock1(event.target.value);
                            changeAnswer({
                                block1: event.target.value,
                                block2: block2,
                                correct: correct
                            })
                        }}
                        className="CreateInputBlocks"
                        placeholder="Block - 1"
                    />
                </div>
                <div className="CreateInputBlocksBlock">

                    <input
                        type="text"
                        value={block2}
                        onChange={event => {
                            setBlock2(event.target.value)
                            changeAnswer({
                                block1: block1,
                                block2: event.target.value,
                                correct: correct
                            })
                        }}
                        className="CreateInputBlocks"
                        placeholder="Block - 2"
                    />
                    <div
                        onClick={() => {
                            setCorrect(2)
                            changeAnswer({
                                block1: block1,
                                block2: block2,
                                correct: 2
                            })
                        }}
                        className="CreateCorrectBlocks"
                    >
                        {
                            correct === 2 ?
                                <img
                                    src={SelectImg}
                                    alt="setected"
                                    className="CreateCorrectImgBlocks"
                                /> :
                                null
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Block2;