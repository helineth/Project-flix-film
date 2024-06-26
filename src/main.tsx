import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './ui/pages/home/Home.tsx';
import MovieDetails from './ui/pages/details/MovieDetails.tsx';
import Results from './ui/pages/results/Results.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="results/:title" element={<Results />} />
          <Route path="movie/:imdbID" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
