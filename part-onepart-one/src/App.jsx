
import React from 'react';
import { Fragment } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';


const App = () => {
  return (
 <Fragment>
     <BrowserRouter>
     <Header/>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>

     <Footer/>
   </Fragment>
  );
};

export default App;