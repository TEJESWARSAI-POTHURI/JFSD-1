import React from 'react';
import './UserHome.css'; // Assuming you will have a CSS file for styling

export default function UserHome() {
  return (
    <div className="user-home">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>User Panel</h1>
        </div>
        <ul className="navbar-menu">
          <li>
            <a href="/userviewevents">Check Events</a>
          </li>
         
        </ul>
        <div className="navbar-avatar">
          <div className='navbar-menu'>
          <li>
            <a href="/">LogOut</a>
          </li>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.HfXtvnZ8YoT0b3elURJaKgHaHx?rs=1&pid=ImgDetMain"
            alt="Avatar"
            className="avatar"
          />
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>Welcome to the User Dashboard</h2>
        <p>Stay updated with the latest events. You can view and participate in upcoming events from the events list below.</p>
        <a href="/userviewevents" className="btn-view-events">
          View Events
        </a>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h3>Upcoming Events</h3>
        <p>Check out the latest events organized by our team. Don’t miss out!</p>
        {/* You can add a dynamic list of events here */}
        <div className="event-list">
          <div className="event-card">
            <h4>Event 1: Dance Party</h4>
            <p>August 15, 2024 - 7:00 PM</p>
          </div>
          <div className="event-card">
            <h4>Event 2: Music Concert</h4>
            <p>October 20, 2024 - 8:00 PM</p>
          </div>
          {/* More event cards can be added dynamically */}
        </div>
      </div>
    </div>
  );
}
