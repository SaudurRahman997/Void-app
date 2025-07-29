import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // or whatever your Tailwind CSS file is

import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
