import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';   
import Home from './pages/Home';             
import Settings from './pages/Settings';     
import UserProfile from './components/UserProfile';  

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};


export default App;
