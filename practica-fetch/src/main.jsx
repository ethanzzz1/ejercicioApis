import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RickAndMorty from './pages/Morty.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RickAndMorty/>
  </StrictMode>,
)
