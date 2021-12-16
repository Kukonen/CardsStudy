import React, {useState} from 'react';
import '../CreateBlocks.scss';
import SelectImg from './select.svg';

const Block2 = () => {

    const [block1, setBlock1] = useState<string>("");
    const [block2, setBlock2] = useState<string>("");

    type correctType = 'block1' | 'block2';
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

        </div>
    )
}

export default Block2;