import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Botao from './components/Botao'

createRoot(document.getElementById('root')).render(
<StrictMode>
    <Header/>
    <Botao/>
    

   </StrictMode>,
)
 