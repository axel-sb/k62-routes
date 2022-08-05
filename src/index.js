import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import '@algolia/autocomplete-theme-classic'
import './fonts/anybody/Anybody-Italic.woff2'
import './fonts/anybody/Anybody-LightItalic.woff2'
import './fonts/anybody/Anybody-BlackItalic.woff2'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
