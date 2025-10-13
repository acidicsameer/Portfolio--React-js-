import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Tooltip } from 'react-tooltip'

import './index.css'
import App from './App.jsx'
 import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ToastContainer />
   <Tooltip id="my-tooltip" 
   
   style={{
    backgroundColor: 'black ', // dark gray
    color: '#f9fafb',           // light text
    fontSize: '16px',
    borderRadius: '10px',
    padding: '4px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
    zIndex: 9999,
  }}
    />
    <App />
  </StrictMode>,
)
