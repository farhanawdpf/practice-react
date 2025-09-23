import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Master from './pages/Master';
import AddUser from './pages/users/AddUser';
import ManageUser from './pages/users/ManageUser';
import AddCategory from './pages/category/AddCategory';
import ManageCategory from './pages/category/ManageCategory';
const App = () => {
  return (
    <div>
      <BrowserRouter>


      
    <Routes>
      <Route path="/" element={<Master />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/manage-user" element={<ManageUser />} />
      <Route path="/add-cat" element={<AddCategory />} />
      <Route path="/manage-cat" element={<ManageCategory />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
};

export default App;