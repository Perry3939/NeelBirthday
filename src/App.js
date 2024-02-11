import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/introPage";
import DateNight from "./pages/dateNight";
import Date from "./pages/date";
import Final from "./pages/final";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/datenight" element={<DateNight />} />
        <Route path="/date" element={<Date />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
