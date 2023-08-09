import { useState } from "react";
import "./App.css";
import * as dotenv from "dotenv";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNoteFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app container bg-dark h-100">
        <h1>This is a React Project</h1>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
