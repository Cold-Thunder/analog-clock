import React from 'react'
import ReactDOM from 'react-dom/client'

import Clock from './components/clock/Clock.jsx'

import './mainStyle.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <div>
        <div className="clock-sec">
          <Clock />
        </div>
      </div>

    </>
  </React.StrictMode>,
)
