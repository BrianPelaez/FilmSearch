import "./App.css";
import React, { useEffect, useState } from "react";

// Router React

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

function App() {


  return (
    <BrowserRouter>
      <header className="title">
        <Link to="/">Pelispedia</Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;