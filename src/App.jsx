import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import AdminPage from './AdminPage';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">
            <i className="fas fa-home icon"></i>
            Home
          </Link>
          <Link to="/book">
            <i className="fas fa-bus icon"></i>
            Book
          </Link>
          <Link to="/admin">
            <i className="fas fa-cog icon"></i>
            Admin
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
