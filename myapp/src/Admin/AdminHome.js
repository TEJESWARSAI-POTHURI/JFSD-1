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
          <strong><li><a href="/addevent">Add Events</a></li></strong>
          <strong><li><a href='/viewevents'>View Events</a></li></strong>
          <strong><li><a href='/viewappliedstudents'>View Students</a></li></strong>
        </ul>
        <div className="navbar-avatar">
        <img
        src="https://th.bing.com/th/id/OIP.HfXtvnZ8YoT0b3elURJaKgHaHx?rs=1&pid=ImgDetMain"
        alt="Avatar"
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
