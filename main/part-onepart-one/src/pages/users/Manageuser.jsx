import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import axios from "axios";
import { Link,NavLink } from 'react-router-dom';
const Manageuser = () => {
  const [user, setUser] = useState([]);
  const [message, setMessage]= useState('');

  const loaderUser = async()=>{ 
    const result= await axios.get("http://localhost/react/practice-react/main/api-php/view.php");
    setUser(result.data);
    console.log(result.data);
  };

  const handleDelete= async(id)=>{
    const res= await axios.delete("http://localhost/react/practice-react/main/api-php/delete.php?id="+ id);
    setMessage(res.data.success);
  }
  useEffect(()=>{ 
    loaderUser();
  }, []);
  return (
    <div className="wrapper">
    <Navbar />
    <Sidebar />
    <div className="content-wrapper">
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Manage User</h3>
              </div>
              <div className="card-header">
                <Link to="/add-user">Add User</Link>
              </div>
              {/* /.card-header */}
              <div className="card-body">
              <p className="text-danger">{ message} </p>                 

                <table
                  id="example1"
                  className="table table-bordered table-striped"
                >
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {user.map((us, ind) => (
                    <tr key={ind}>
                      <td>{ind+1}</td>
                      <td>{us.id}</td>
                      <td>{us.name}</td>
                      <td>{us.email}</td>
                      <td>{us.phone}</td>
                      <td>
                        {/* <Link to={"/edit-user/"+user.id} className="btn btn-success mx-2">Edit</Link> */}
                        <NavLink to={`/edit-user/${user.id}`}>
                                            <button className='btn btn-info mb-2 mt-2'>Update</button>
                                        </NavLink>
                        {/* <button className="btn btn-danger" onClick={ ()=>handleDelete(user.id)}>Delete</button> */}
                        <button className='btn btn-danger' onClick={() => { handleDelete(user.id) }}>Delete</button>
                       
                      </td>
                    </tr>
  ))}
                  </tbody>
                </table>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}
    </section>
    </div>
      {/* footer-section */}
      <Footer />
    </div>
  );
};

export default Manageuser;
