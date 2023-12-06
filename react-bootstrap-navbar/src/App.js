// src/App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CustomNavbar from './Navbar';
import Option1 from './Option1';
import Option2 from './Option2';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <div className="content">
          <Routes>
            <Route path="/option1" element={<Option1/ >} />
            <Route path="/option2" element={<Option2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
