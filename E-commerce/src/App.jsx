import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <div className="py-3"> */}
          {/* <Container> */}
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* </Container> */}
          {/* </div> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
