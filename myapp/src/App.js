import './App.css';
import AdminHome from './Admin/AdminHome';
import UserHome from './User/UserHome'; // Imported but not used yet
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEvent from './Admin/AddEvent';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <div>
      
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path='/userhome'element={<UserHome />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path='/addevent' element={<AddEvent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
