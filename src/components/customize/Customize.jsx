import React, { useState, useEffect } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './customize.css'

const Customize = () => {

    useEffect(() => {
        let customize = document.querySelectorAll('.cust');
        let dropDown = document.querySelectorAll('.drop-arr');

        let clrBtns = document.querySelectorAll('.clr-btn-sec');
        let clrBorderBtn = document.querySelectorAll('.clr-border-btn');
        let clrBackBtn = document.querySelectorAll('.clr-back-btn');

        let click = false;
        customize.forEach(custom => {
            custom.addEventListener('click', (e) => {
                click = !click;
                if (click == true) {
                    dropDown[e.currentTarget.id].classList.add('drop-click');
                    clrBtns[e.currentTarget.id].classList.add('clr-click');
                } else {
                    dropDown[e.currentTarget.id].classList.remove('drop-click')
                    clrBtns[e.currentTarget.id].classList.remove('clr-click');
                }

            })
        })

        clrBorderBtn.forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                document.documentElement.style.setProperty(`--border`, `${e.target.value}`);
            })
        })

        clrBackBtn.forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                document.documentElement.style.setProperty(`--back-color`, `${e.target.value}`);
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
                                <button className="clr-back-btn clr-btn teal" value="#008080"></button>
                                <button className="clr-back-btn clr-btn midnight" value="#191970"></button>
                                <button className="clr-back-btn clr-btn darkSlate" value="#2F4F4F"></button>
                                <button className="clr-back-btn clr-btn saddle" value="#8B4513"></button>
                                <button className="clr-back-btn clr-btn darkGreen" value="#006400"></button>
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
                                <button className="clr-border-btn clr-btn sandy" value="#F4A460"></button>
                                <button className="clr-border-btn clr-btn bisque" value="#FFE4C4"></button>
                                <button className="clr-border-btn clr-btn aqua" value="#00FFFF"></button>
                                <button className="clr-border-btn clr-btn aquamarin" value="#7FFFD4"></button>
                                <button className="clr-border-btn clr-btn light-gray" value="#D3D3D3"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customize;