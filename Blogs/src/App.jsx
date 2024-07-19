import { useState, useE } from "react";
import Blogs from "./blogs";
import BlogList from "./blogList";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Create from "./Create";
import BlogDetail from "./BlogDetail";


function App() {
 
  return (
    <>
      <Navbar />
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
