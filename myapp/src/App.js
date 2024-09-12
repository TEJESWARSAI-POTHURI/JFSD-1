import './App.css';
import AdminHome from './Admin/AdminHome';
import UserHome from './User/UserHome';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

   <Router>
    <Routes>
      <Route path="adminhome" element ={AdminHome}></Route>
      <Route path="userhome"  element={UserHome}></Route>
    </Routes>

   </Router>
  );
}

export default App;
