import React from 'react';
import { Link } from 'react-router-dom'; // Import Link, Routes, and Route
 // Import AddEvent component
import './AdminHome.css'; // Ensure you have the AdminHome.css file for styling

function AdminHome() {
  return (
    <div className="admin-home">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-logo">Admin Panel</div>
        <ul className="navbar-menu">
          <strong><li><a href="/addevent">Add Events</a></li></strong>
          <strong><li><a href='/viewevents'>View Events</a></li></strong>
          <strong><li><a href='/viewappliedstudents'>View Students</a></li></strong>
        </ul>
        <div className="navbar-avatar">
          <div className='navbar-menu'>
          <strong><li><a href='/'>LogOut</a></li></strong>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.HfXtvnZ8YoT0b3elURJaKgHaHx?rs=1&pid=ImgDetMain"
            alt="Avatar"
            className="avatar"
          />
        </div>
      </nav>

      {/* Content Section */}
      <div className="content">
        <h1>Welcome Admin </h1>
        <p className="welcome-message">
          Manage events, track student participation, and handle administrative tasks with ease.
        </p>

        {/* Section to showcase key features */}
        <div className="feature-cards">
          <div className="card">
            <h2>Add Events</h2>
            <p>Create and manage events for your organization.</p>
            <Link to="/addevent" className="button">Add Event</Link>
          </div>

          <div className="card">
            <h2>View Events</h2>
            <p>Track and monitor all upcoming and past events.</p>
            <Link to="/viewevents" className="button">View Events</Link>
          </div>

          <div className="card">
            <h2>View Students</h2>
            <p>Check which students have applied for specific events.</p>
            <Link to="/viewappliedstudents" className="button">View Students</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
