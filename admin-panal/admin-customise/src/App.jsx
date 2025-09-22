import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Master from './pages/Master';
import AddUser from './pages/users/AddUser';
import ManageUser from './pages/users/ManageUser';
const App = () => {
  return (
    <div>
      <BrowserRouter>


      
    <Routes>
      <Route path="/" element={<Master />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/manage-user" element={<ManageUser />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
};

export default App;