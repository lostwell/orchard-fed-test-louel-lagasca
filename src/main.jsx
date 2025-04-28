import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App.jsx'
import Content from './assets/data/data.json'

import './styles/index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App contentData={Content.data}/>
  </StrictMode>,
)
