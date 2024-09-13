import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; // Import the CSS file

function Login({ setIsAuthenticated }) { // Accept setIsAuthenticated as a prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create navigate instance

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple login logic with role differentiation
    if (username === 'admin' && password === 'adminpass') {
      setIsAuthenticated('admin'); // Set user as authenticated with admin role
      navigate('/adminhome'); // Redirect to Admin page
    } else if (username === 'user' && password === 'userpass') {
      setIsAuthenticated('user'); // Set user as authenticated with user role
      navigate('/userhome'); // Redirect to User page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <img
        src="https://th.bing.com/th/id/OIP.HfXtvnZ8YoT0b3elURJaKgHaHx?rs=1&pid=ImgDetMain"
        alt="Avatar"
        className="avatar"
      />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
