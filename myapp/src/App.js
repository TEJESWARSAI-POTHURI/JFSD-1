import './App.css';
import AdminHome from './Admin/AdminHome';
import UserHome from './User/UserHome';
import AddEvent from './Admin/AddEvent';
import ViewEvents from './Admin/ViewEvents'; // Admin's View Events page
import UserViewEvents from './User/UserViewEvents'; // User's View Events page
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Login';
import ViewAppliedStudents from './Admin/ViewAppliedStudents';
import EventManager from './EventManager/EventManager';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [role, setRole] = useState(localStorage.getItem('role') || '');
  const [events, setEvents] = useState([]); // Global state for events

  useEffect(() => {
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


  // Function to add an event
  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
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
          <Route path="/events" component={EventManager} />
          <Route
            path="/addevent"
            element={
              isAuthenticated && role === 'admin' ? (
                <AddEvent addEvent={addEvent} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
           <Route
            path="/viewappliedstudents"
            element={
              isAuthenticated && role === 'admin' ? (
                <ViewAppliedStudents events={events} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/viewevents"
            element={
              isAuthenticated && role === 'admin' ? (
                <ViewEvents events={events} />
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
          <Route
            path="/userviewevents"
            element={
              isAuthenticated && role === 'user' ? (
                <UserViewEvents events={events} />
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
