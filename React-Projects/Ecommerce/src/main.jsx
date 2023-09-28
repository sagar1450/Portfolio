import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productcontext.jsx'
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
)
