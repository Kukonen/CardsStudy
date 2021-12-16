import React, {useState} from 'react';
import '../CreateBlocks.scss';
import SelectImg from './select.svg';

const Block4 = () => {

    const [block1, setBlock1] = useState<string>("");
    const [block2, setBlock2] = useState<string>("");
    const [block3, setBlock3] = useState<string>("");
    const [block4, setBlock4] = useState<string>("");

    type correctType = 'block1' | 'block2' | 'block3' | 'block4';
    const [correct, setCorrect] = useState<correctType>("block1");

    return (
        <div>
            <div className="CreateInputBlocksSection">
                <div className="CreateInputBlocksBlock">
                    <div
                        onClick={() => setCorrect('block1')}
                        className="CreateCorrectBlocks"
                    >
                        {
                            correct === 'block1' ?
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
                        onChange={event => setBlock1(event.target.value)}
                        className="CreateInputBlocks"
                        placeholder="Block - 1"
                    />
                </div>
                <div className="CreateInputBlocksBlock">

                    <input
                        type="text"
                        value={block2}
                        onChange={event => setBlock2(event.target.value)}
                        className="CreateInputBlocks"
                        placeholder="Block - 2"
                    />
                    <div
                        onClick={() => setCorrect('block2')}
                        className="CreateCorrectBlocks"
                    >
                        {
                            correct === 'block2' ?
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
                        onClick={() => setCorrect('block3')}
                        className="CreateCorrectBlocks"
                    >
                        {
                            correct === 'block3' ?
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
                        onChange={event => setBlock3(event.target.value)}
                        className="CreateInputBlocks"
                        placeholder="Block - 3"
                    />
                </div>
                <div className="CreateInputBlocksBlock">

                    <input
                        type="text"
                        value={block4}
                        onChange={event => setBlock4(event.target.value)}
                        className="CreateInputBlocks"
                        placeholder="Block - 4"
                    />
                    <div
                        onClick={() => setCorrect('block4')}
                        className="CreateCorrectBlocks"
                    >
                        {
                            correct === 'block4' ?
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