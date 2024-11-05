// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import HomePage from './Components/Homepage/Home';
import RegistrationForm from './Components/Registration/RegistrationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} /> {/* Default to Registration */}
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} /> {/* Change route to login */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
