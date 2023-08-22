import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import App from './App'
import UserContextProvider from './contexts/user.context'

import './index.css'
import CategoryContextProvider from './contexts/category.context'
import CartContextProvider from './contexts/cart.context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <CategoryContextProvider>
          <App />
        </CategoryContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)

reportWebVitals()
