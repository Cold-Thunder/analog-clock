import React, { useEffect, useState } from 'react';

import Custom from'../customize/Customize.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './clock.css'

const Clock = () => {

    let close = true;

    useEffect(() => {
        let h = document.querySelector('.hour');
        let m = document.querySelector('.min');
        let s = document.querySelector('.sec');

        let button = document.querySelector('.button1');
        let closeBtn = document.querySelector('.close');
        let custom = document.querySelector('.custom');
        let digital = document.querySelector('.digital');

        let clicked = false;

        button.addEventListener('click', () => {
            clicked = !clicked;
            close = !close;

            if(clicked == true){
                button.classList.add('clicked');
                custom.classList.add('custom-show');
            }else{
                button.classList.remove('clicked');
            }
            console.log(clicked)
        })

        closeBtn.addEventListener('click', ()=>{
            clicked = !clicked;
            close = !close;
            if(clicked == false){
                button.classList.remove('clicked');
            }
            close ? custom.classList.remove('custom-show') : custom.classList.add('custom-show'); 
            console.log(close);
        })


        setInterval(() => {
            let date = new Date();

            let hour = (360 / 12) * (date.getHours() + date.getMinutes() / 60) + 90;
            let min = (360 / 60) * date.getMinutes() + 90;
            let sec = (360 / 60) * date.getSeconds() + 90;

            h.style.transform = `rotate(${hour}deg)`;
            m.style.transform = `rotate(${min}deg)`;
            s.style.transform = `rotate(${sec}deg)`;

            digital.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

        }, 0);

    })


    return (
        <div className="main-sec">
            <div className="buttons-sec">
                <button className="button1 button">Customize</button>
            </div>
            <div className="clock-div">
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
            <div className="custom">
                <button className="close"><i className="fa-solid fa-circle-xmark"></i></button>
                <Custom />
            </div>
        </div>
    )
}
export default Clock;