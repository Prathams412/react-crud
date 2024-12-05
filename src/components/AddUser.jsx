// import React from 'react'

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({
    id:"",
    Name:"",
    UserName:"",
    Email:"",
  })
  const handleText =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const addUser = async (e) =>{
    e.preventDefault()
    await axios.post("https://6684fb0e56e7503d1ae1da81.mockapi.io/crud/User",user)
    navigate("/Home")
  }
  const {id,Name,UserName,Email} = user;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form action="" className="bg-info p-2">
              <div className="form-floating mb-3 w-75 mx-auto mt-3">
                <input
                  name="id"
                  value={id}
                  onChange={handleText}
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Enter ID</label>
              </div>
              <div className="form-floating mb-3 w-75 mx-auto mt-3">
                <input
                  name="Name"
                  value={Name}
                  onChange={handleText}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Enter Name</label>
              </div>
              <div className="form-floating mb-3 w-75 mx-auto mt-3">
                <input
                  name="UserName"
                  value={UserName}
                  onChange={handleText}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Enter User Name</label>
              </div>
              <div className="form-floating mb-3 w-75 mx-auto mt-3">
                <input
                  name="Email"
                  value={Email}
                  onChange={handleText}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Enter Email address</label>
              </div>
              <div className="text-center">
                <button className="btn btn-primary" onClick={addUser}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
