import React, {useEffect, useState} from 'react';


import Custom from'./customize/Customize.jsx'
import Analog from './clock/Clock'
import StopWatch from './stopWatch/StopWatch'

import './app.css'

const App = () => {
    const [value, setValue] = useState(true);
    let clicked = value;

    const stopWatch = () =>{
        clicked = !clicked;

        setValue(value => {
            return(
                value = clicked
            )
        })
    }

    useEffect(()=>{
        let btn = document.querySelector('.btn');

        value ? btn.classList.remove('click') : btn.classList.add('click');
        if(value){
            btn.innerHTML = 'Stop Watch';
        }else{
            btn.innerHTML = 'Analog Clock';
        }

        
    }, [value])

    return (
        <div className="main">
                <div className="btn-sec">
                    <button className="btn1 btn" onClick={stopWatch}></button>
                </div>
            <div className="clock-sec">
                {value ? <Analog /> : <StopWatch />}
            </div>
        </div>
    )
}

export default App;