import React from 'react'

export default function UserHome() {
  return (
    <div className="admin-home">
    {/* Navbar Section */}
    <nav className="navbar">
      <div className="navbar-logo">User Panel</div>
      <ul className="navbar-menu">
        <strong><li><a href="/userviewevents">Check Events</a></li></strong>
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
  )
}
