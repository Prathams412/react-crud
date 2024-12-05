// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const {idfetch} = useParams()
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
  const updateUser = async (e) =>{
    e.preventDefault()
    await axios.put(`https://6684fb0e56e7503d1ae1da81.mockapi.io/crud/User/${idfetch}`,user)
    navigate("/Home")
  }
  useEffect(()=>{
    getUpdateableData();
  },[])

  const getUpdateableData = async ()=>{
    let singleUserData = await axios.get(`https://6684fb0e56e7503d1ae1da81.mockapi.io/crud/User/${idfetch}`)
    setUser(singleUserData.data);
  }
  const {id,Name,UserName,Email} = user;
  return (
    <>
      <div className="container mt-5">
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
                <button className="btn btn-primary" onClick={updateUser}>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
