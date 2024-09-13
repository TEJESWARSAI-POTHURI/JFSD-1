import './App.css';
import AdminHome from './Admin/AdminHome';
import UserHome from './User/UserHome';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AddEvent from './Admin/AddEvent';
import Login from './Login';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [role, setRole] = useState(localStorage.getItem('role') || '');

  useEffect(() => {
    // Sync authentication and role state with local storage
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const userRole = localStorage.getItem('role');
    setIsAuthenticated(authStatus);
    setRole(userRole);
  }, []);

  const handleLogin = (userRole) => {
    setIsAuthenticated(true);
    setRole(userRole);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('role', userRole);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setRole('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('role');
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={handleLogin} />} />
          {/* Admin-only routes */}
          <Route
            path="/adminhome"
            element={
              isAuthenticated && role === 'admin' ? (
                <AdminHome />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/addevent"
            element={
              isAuthenticated && role === 'admin' ? (
                <AddEvent />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          {/* User-only routes */}
          <Route
            path="/userhome"
            element={
              isAuthenticated && role === 'user' ? (
                <UserHome />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
