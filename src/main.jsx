import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//no borrar StrictMode,hace una comprobación en desarrollo, por ello veiamos dos frases en consola
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
