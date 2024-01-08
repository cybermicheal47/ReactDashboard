import React from "react";
import Topbar from "./components/topnavbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Userlist from "./pages/userlists/Userlist";
import Userpage from "./pages/user/Userpage";
import NewUser from "./pages/newuser/NewUser";
import Productlist from "./pages/productList/Productlist";
import Product from "./pages/products/Product";
import NewProduct from "./pages/newproduct/NewProduct";

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="contain">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Userlist />} />
          <Route path="/user/:userId" element={<Userpage />} />
          <Route path="/newuser" element={<NewUser />} />

          <Route path="/products" element={<Productlist />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
