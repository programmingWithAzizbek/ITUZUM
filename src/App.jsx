import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import Selected from "./pages/Selected.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/details/:id" element={<Details />}></Route>
      <Route path="/selected" element={<Selected />}></Route>
    </Routes>
  );
}

export default App;
