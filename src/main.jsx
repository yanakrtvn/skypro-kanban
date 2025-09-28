import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { GlobalStyles } from './components/GlobalStyles.styled.js'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <GlobalStyles />
    <App />
    </BrowserRouter>
    )