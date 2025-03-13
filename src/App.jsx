import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import Selected from "./pages/Selected.jsx";
import Layout from "./layout/Layout.jsx";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Cart from "./pages/Cart.jsx";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        }
      >
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/selected" element={<Selected />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart searchQuery={searchQuery} />} />
      </Route>
      <Route path="/errorpage" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default App;
