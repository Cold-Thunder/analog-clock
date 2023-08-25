import Reac, {useEffect, useState} from 'react';

import './clock.css'

const Clock =()=>{

    useEffect(()=>{
        let h = document.querySelector('.hour');
        let m = document.querySelector('.min');
        let s = document.querySelector('.sec');

        let digital = document.querySelector('.digital');

        setInterval(() => {
            let date = new Date();

            let hour = (360/12)*(date.getHours() + date.getMinutes()/60) + 90;
            let min = (360/60)*date.getMinutes() + 90;
            let sec = (360/60)*date.getSeconds() + 90;

            h.style.transform = `rotate(${hour}deg)`;
            m.style.transform = `rotate(${min}deg)`;
            s.style.transform = `rotate(${sec}deg)`;

            digital.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

        }, 0);
    })


    return(
        <div className="clock-div">
            <h1>Analog Clock</h1>
            <div className='clock'>
                <div className='hour'></div>
                <div className='min'></div>
                <div className='sec'></div>
                <div className='numbers'>
                    <div className="number num12">12</div>
                    <div className="number num1">1</div>
                    <div className="number num2">2</div>
                    <div className="number num3">3</div>
                    <div className="number num4">4</div>
                    <div className="number num5">5</div>
                    <div className="number num6">6</div>
                    <div className="number num7">7</div>
                    <div className="number num8">8</div>
                    <div className="number num9">9</div>
                    <div className="number num10">10</div>
                    <div className="number num11">11</div>
                </div>
                <div className="digital"></div>
            </div>
        </div>
    )
}
export default Clock;