import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Import Link, Routes, and Route
import AddEvent from './AddEvent'; // Import AddEvent component
import './AdminHome.css'; // Ensure you have the AdminHome.css file for styling

function AdminHome() {
  return (
    <div className="admin-home">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-logo">Admin Panel</div>
        <ul className="navbar-menu">
          <li><a href="/addevent">Events</a></li>

      
        </ul>
        <div className="navbar-avatar">
          <img
            src="https://via.placeholder.com/40" // Replace with admin avatar URL
            alt="Admin Avatar"
            className="avatar"
          />
        </div>
      </nav>

      {/* Content Section */}
      <div className="content">
      </div>
    </div>
  );
}

export default AdminHome;
