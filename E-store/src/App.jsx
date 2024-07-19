import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/MyState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";


// import { AllProducts } from './pages/allproducts/AllProducts';

function App() {

  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          {/* <Route path='/allproducts' element={<AllProducts />} /> */}
          <Route path="/dashboard" element={
            <adminProtectedRoute>
              <Dashboard />
            </adminProtectedRoute>
          } />
          <Route path="/addproduct" element={
            // <adminProtectedRoute>
              <AddProduct/>
            // </adminProtectedRoute>
          }/>
             <Route path="/updateproduct" element={
            <adminProtectedRoute>
              <UpdateProduct />
            </adminProtectedRoute>
          }/>
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
      <ToastContainer />

    </MyState>
  );
}

export default App;
export const protectedRout=({children})=>{
  if(localStorage.getItem('user')){
    return children
    }
   else{
    window.location.href='/login'
   } 
}
export const adminProtectedRoute=({children})=>{
  const admin = JSON.parse(localStorage.getItem('user'))
  if(admin.user.email==="ushbaakram@gmail.com"){
    return children
  }
  else{
    <Navigate to={'/login'}/>
  }
}
