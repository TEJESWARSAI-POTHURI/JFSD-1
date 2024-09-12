import './App.css';
import AdminHome from './Admin/AdminHome';
import UserHome from './User/UserHome'; // Imported but not used yet
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
      
        <Routes>
        <Route path="/" element={<h2>Hello, This is done by Tej</h2>} />
          <Route path='/userhome'element={<UserHome />} />
          <Route path="/adminhome" element={<AdminHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
