import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import "./style/app.scss";


export const server = "https://gas-station-backend.onrender.com/api/v1";
// export const server = "http://localhost:4000/api/v1";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
