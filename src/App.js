import React from 'react';
import './App.css';

import CardsCald from './components/CardsCald.js';
import Header from './components/Header.js';
import CardProfile from './components/CardProfile.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
        <Route exact path="/" element={<CardsCald />} key="home"></Route>
          <Route exact path="/Calendario" element={<CardsCald />} key="CardsCald"></Route>
          <Route
            exact
            path="/Perfiles"
            element={<CardProfile />}
            key="profiles"
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
