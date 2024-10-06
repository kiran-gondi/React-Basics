import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import AppRoute from './Routing/AppRoute.tsx';
// import {BrowserRouter as Router} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  // <Router>
  //   <AppRoute></AppRoute>
  // </Router>
  <StrictMode>
    <App />
  </StrictMode>
)
