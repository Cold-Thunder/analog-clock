import React, { useState, useEffect } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './customize.css'

const Customize = () => {

    useEffect(() => {
        let customize = document.querySelectorAll('.cust');
        let dropDown = document.querySelectorAll('.drop-arr');

        let clrBtn = document.querySelectorAll('.clr-btn-sec');

        let click = false;
        customize.forEach(custom => {
            custom.addEventListener('click', (e) => {
                click = !click;
                if (click == true) {
                    dropDown[e.currentTarget.id].classList.add('drop-click');
                    clrBtn[e.currentTarget.id].classList.add('clr-click');
                } else {
                    dropDown[e.currentTarget.id].classList.remove('drop-click')
                    clrBtn[e.currentTarget.id].classList.remove('clr-click');
                }

            })
        })
    })

    return (
        <div className="cust-main">

            <div className="custom-start">
                <h1><i>Customize</i></h1>
                <div className="customize">
                    <div className="back">
                        <div className="background cust" id={0}>
                            <p>Background Color</p>
                            <button className="drop-arr"><i className="fa-solid fa-angle-down"></i></button>
                        </div>
                        <div className="clr-btn-sec">
                            <div className="color-btns" id={0}>
                                <button className="clr-back-btn clr-btn"></button>
                                <button className="clr-back-btn clr-btn"></button>
                                <button className="clr-back-btn clr-btn"></button>
                                <button className="clr-back-btn clr-btn"></button>
                                <button className="clr-back-btn clr-btn"></button>
                            </div>
                        </div>
                    </div>
                    <div className="border">
                        <div className="border cust" id={1}>
                            <p>Border Color</p>
                            <button className="drop-arr"><i className="fa-solid fa-angle-down"></i></button>
                        </div>
                        <div className='clr-btn-sec'>
                            <div className="color-btns" id={1}>
                                <button className="clr-border-btn clr-btn blue"></button>
                                <button className="clr-border-btn clr-btn bisque"></button>
                                <button className="clr-border-btn clr-btn aqua"></button>
                                <button className="clr-border-btn clr-btn aquamarin"></button>
                                <button className="clr-border-btn clr-btn dark-gray"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customize;