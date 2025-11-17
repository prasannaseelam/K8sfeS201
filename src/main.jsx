import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
=======
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById('root')).render(
  <CartProvider>
  <App/>
</CartProvider>
>>>>>>> 97f2d438166a1639c72a03e67c702a556a9099b6
)
