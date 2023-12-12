import React from 'react';
import './App.css';

import CardsCald from './components/CardsCald.js';
import Header from './components/Header.js';
import CardProfile from './components/CardProfile.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// BrowserRouter as Router,
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<CardsCald />} key="home"></Route>
          <Route
            exact
            path="/Calendario"
            element={<CardsCald />}
            key="CardsCald"
          ></Route>
          <Route
            exact
            path="/Perfiles"
            element={<CardProfile />}
            key="profiles"
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
