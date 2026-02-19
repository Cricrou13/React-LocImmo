import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client' // On garde l'import complet pour la ligne 14
import './styles/main.scss'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)