import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Globalprovaider from './context/Globalstate.jsx'
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Globalprovaider>
      <App />
      </Globalprovaider>
    </BrowserRouter>
  </StrictMode>,
)
