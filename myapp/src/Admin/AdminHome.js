import React from 'react';
import './AdminHome.css'; // Make sure to create this file for styling

function AdminHome() {
  return (
    <div className="admin-home">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-logo">Admin Panel</div>
        <ul className="navbar-menu">
          <li><a href="#events">Events</a></li>
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
        <h1>Welcome to Admin Home Page</h1>
        <p>Here you can manage all the events and other admin functionalities.</p>
      </div>
    </div>
  );
}

export default AdminHome;
