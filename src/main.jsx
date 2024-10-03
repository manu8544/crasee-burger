import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OrderPage from './components/pages/order/OrderPage.jsx'
import ErrorPage from './components/pages/error/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/order/:username",
    element: <OrderPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
