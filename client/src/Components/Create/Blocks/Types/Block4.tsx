import React, {useState} from 'react';
import '../CreateBlocks.scss';
import SelectImg from './select.svg';

const Block4 = (props:any) => {

    const {changeAnswer} = props;

    const [block1, setBlock1] = useState<string>("");
    const [block2, setBlock2] = useState<string>("");
    const [block3, setBlock3] = useState<string>("");
    const [block4, setBlock4] = useState<string>("");

    type correctType = 1 | 2 | 3 | 4;
    const [correct, setCorrect] = useState<correctType>(1);

    return (
        <div>
            <div className="CreateInputBlocksSection">
                <div className="CreateInputBlocksBlock">
                    <div
                        onClick={() => {
                            setCorrect(1)
                            changeAnswer({
                                block1: block1,
                                block2: block2,
                                block3: block3,
                                block4: block4,
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
                                block3: block3,
                                block4: block4,
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
                            setBlock2(event.target.value);
                            changeAnswer({
                                block1: block1,
                                block2: event.target.value,
                                block3: block3,
                                block4: block4,
                                correct: correct
                            })
                        }}
                        className="CreateInputBlocks"
                        placeholder="Block - 2"
                    />
                    <div
                        onClick={() => {
                            setCorrect(2);
                            changeAnswer({
                                block1: block1,
                                block2: block2,
                                block3: block3,
                                block4: block4,
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
            <div className="CreateInputBlocksSection">
                <div className="CreateInputBlocksBlock">
                    <div
                        onClick={() => {
                            setCorrect(3);
                            changeAnswer({
                                block1: block1,
                                block2: block2,
                                block3: block3,
                                block4: block4,
                                correct: 3
                            })
                        }}
                        className="CreateCorrectBlocks"
                    >
                        {
                            correct === 3 ?
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
                        value={block3}
                        onChange={event => {
                            setBlock3(event.target.value);
                            changeAnswer({
                                block1: block1,
                                block2: block2,
                                block3: event.target.value,
                                block4: block4,
                                correct: correct
                            })
                        }}
                        className="CreateInputBlocks"
                        placeholder="Block - 3"
                    />
                </div>
                <div className="CreateInputBlocksBlock">

                    <input
                        type="text"
                        value={block4}
                        onChange={event => {
                            setBlock4(event.target.value)
                            changeAnswer({
                                block1: block1,
                                block2: block2,
                                block3: block3,
                                block4: event.target.value,
                                correct: correct
                            })
                        }}
                        className="CreateInputBlocks"
                        placeholder="Block - 4"
                    />
                    <div
                        onClick={() => {
                            setCorrect(4)
                            changeAnswer({
                                block1: block1,
                                block2: block2,
                                block3: block3,
                                block4: block4,
                                correct: 4
                            })
                        }}
                        className="CreateCorrectBlocks"
                    >
                        {
                            correct === 4 ?
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

export default Block4;