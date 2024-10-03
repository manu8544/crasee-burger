import LoginPage from "./components/pages/login/LoginPage";
import './App.css'
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";
import OrderPage from "./components/pages/order/OrderPage";

export default function App(){
  return( 
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}