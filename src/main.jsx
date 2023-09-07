import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App.jsx'

import './mainStyle.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <div>
        <div className="app-sec">
          <App />
        </div>
      </div>

    </>
  </React.StrictMode>,
)
