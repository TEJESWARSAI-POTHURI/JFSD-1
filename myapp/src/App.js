import './App.css';
import AdminHome from './Admin/AdminHome';
import UserHome from './User/UserHome'; // Imported but not used yet
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AddEvent from './Admin/AddEvent';
import Login from './Login';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  useEffect(() => {
    // Sync authentication state with local storage
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={handleLogin} />} />
          <Route
            path="/userhome"
            element={isAuthenticated ? <UserHome /> : <Navigate to="/" />}
          />
          <Route
            path="/adminhome"
            element={isAuthenticated ? <AdminHome /> : <Navigate to="/" />}
          />
          <Route
            path="/addevent"
            element={isAuthenticated ? <AddEvent /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
