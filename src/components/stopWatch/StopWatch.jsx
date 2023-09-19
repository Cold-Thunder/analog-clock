import React, { useState, useEffect } from 'react';

import './stopWatch.css'

const StopWatch = () => {
    let cmili = 0, csec = 0, cmin = 0, chour = 0;

    useEffect(() => {
        let st = document.querySelector('.start-btn');
        let re = document.querySelector('.reset-btn');

        let reset;
        let start;
        let inter;

        let miliSec = document.querySelector('.mili-second');
        let s = document.querySelector('.s');
        let m = document.querySelector('.m');
        let h = document.querySelector('.h');

        st.addEventListener('click', () => {
            start = !start;

            if (start == true) {
                st.innerText = 'Stop';
                st.classList.add('clicked');

                inter = setInterval(()=>{
                    cmili +=1;
                    miliSec.innerText = cmili;
                    if(cmili > 99){
                        cmili = 0;
                        csec += 1;
                        s.innerText = csec;
                        if(csec > 59){
                            csec = 0;
                            cmin += 1;
                            m.innerText = cmin;
                            if(cmin > 59){
                                cmin = 0;
                                chour += 1;
                                h.innerText = chour;
                            }
                        }
                    }  
                }, 10);
            } else {
                st.innerText = 'Start';
                st.classList.remove('clicked');
                clearInterval(inter);
            }
        })

        re.addEventListener('click', () => {
            reset = !reset;
            start = false;
            clearInterval(inter);
            st.classList.remove('clicked');
            st.innerText = 'Start';
            cmili = 0, csec = 0, cmin = 0, chour = 0;

            miliSec.innerText = '00';
            s.innerText = '00';
            m.innerText = '00';
            h.innerText = '00';

            reset ? re.classList.add('reset-click') : re.classList.remove('reset-click');
        })

    }, [])

    return (
        <div className="stopWatch">
            <div className="stopWatch-sec">
                <div className="time-sec">
                    <p className="mili-second">00</p>
                    <div className="other-times"><p className="h"> 00 </p>:<p className="m"> 00 </p>:<p className="s"> 00 </p></div>
                </div>
            </div>
            <div className="button-sec">
                <button className="start-btn butns">Start</button>
                <button className="reset-btn butns">Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;