import React from 'react';
import {NavLink} from 'react-router-dom'
const Sidebar = () => {
    return (
        <div>
        {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="../../index3.html" className="brand-link">
    <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="right fas fa-angle-left" />
            </p>
          </a>
        </li>
      
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p>
             User 
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <NavLink to="/add_user" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Add User</p>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/manage_user" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Manage User</p>
              </NavLink>
            </li>
          </ul>
        </li>
       
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-book" />
            <p>
              Pages
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <NavLink to="/use_state" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>UseState</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/destruct" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Destruct</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="../examples/e-commerce.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>E-commerce</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../examples/projects.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Projects</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../examples/project-add.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Project Add</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../examples/project-edit.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Project Edit</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../examples/project-detail.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Project Detail</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../examples/contacts.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Contacts</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../examples/faq.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>FAQ</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../examples/contact-us.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Contact us</p>
              </a>
            </li>
          </ul>
        </li>
        
       
        <li className="nav-header">MISCELLANEOUS</li>
      
      
       
        
        <li className="nav-header">LABELS</li>
       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>


        </div>
    );
};

export default Sidebar;