import React from 'react';
import { strikeFN } from '../App';

const Dashboard = (props) => {
    console.log(props)

    return(
        <div>
            <button onClick={props.strikeFN()}>Strike</button>
            <button>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
        </div>
    )
}

export default Dashboard