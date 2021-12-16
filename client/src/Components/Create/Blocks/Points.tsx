import React, {useState} from 'react';

const Points = () => {

    const [points, setPoints] = useState<number>(0)

    return (
        <div id="CreatePoints">
            <span>
              Points:
            </span>
            <input
                type="number"
                size={2}
                className="CreatePointsInput"
                value={points}
                onChange={event => {
                    const newPoints = Number(event.target.value);
                    setPoints(newPoints);
                    }
                }
            />
        </div>
    )
}

export default Points;