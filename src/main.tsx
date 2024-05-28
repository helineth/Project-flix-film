import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './ui/pages/home/Home.tsx';
import MovieDetails from './ui/pages/details/MovieDetails.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/results/:title" element={<Home />}/> 
           <Route path="/movie/:imdbID" element={<MovieDetails />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
