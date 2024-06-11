import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Apropos from "./pages/Apropos/Apropos";
import Fiche from "./pages/Fiche/Fiche";
import Error from "./pages/Error/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="fiche/:id" element={<Fiche />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
