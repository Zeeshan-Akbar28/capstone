import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Photos from "./pages/Photos";
import Cart from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route eaxct path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
