import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Master from "./pages/Master";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AddUser from "./pages/User/AddUser";
import ManageUser from "./pages/User/ManageUser";
function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Sidebar/>
    <Routes>
      <Route path="/master" element={<Master />} />
      <Route path="/" element={<Home />} />
      <Route path="/add_user" element={<AddUser />} />
      <Route path="/manage_user" element={<ManageUser />} />
    </Routes>
    <Footer />
  </BrowserRouter>
 
  )
}

export default App
