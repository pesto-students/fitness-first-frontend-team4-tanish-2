// import "./App.css";
import React from 'react';
import LoginLandingPage from './LoginLandingPage'
import { Route, BrowserRouter as  Router, Routes } from "react-router-dom";
import Trainerdashboard from "./MainDashBoard/trainerdashboard";


function App() {
  return (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LoginLandingPage />} />
        <Route path="dashboard" element={<Trainerdashboard />} />
      </Routes>
    </Router>
  </div>

  );
}

export default App;
