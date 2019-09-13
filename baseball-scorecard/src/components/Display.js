import React from 'react';

const Display = (props) => {
    console.log(props)

    return(
        <div>
            <div>
                Balls: {props.balls}
            </div>
            <div>
                Strikes: {props.strikes}
            </div>
        </div>
    )
}

export default Display