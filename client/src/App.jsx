import React from "react";
import { Routes, Route } from "react-router-dom";
import AddColor from "./components/admin/AddColor";
import AddProduct from "./components/admin/AddProduct";
import AddSize from "./components/admin/AddSize";
import AdminLogin from "./components/admin/AdminLogin";
import Colors from "./components/admin/Colors";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Sizes from "./components/admin/Sizes";
import Home from "./components/Home";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Register from "./components/user/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={ <Login /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={ <Products /> } />
        <Route path="/admin/add-product" element={ <AddProduct /> } />
        <Route path="/admin/colors" element={ <Colors /> } />
        <Route path="/admin/add-color" element={ <AddColor /> } />
        <Route path="/admin/sizes" element={ <Sizes /> } />
        <Route path="/admin/add-size" element={ <AddSize /> } />
      </Routes>
    </>
  );
}

export default App;
