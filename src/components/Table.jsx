// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Table = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  
  const loadData = async () => {
    let userDataList = await axios.get(
      "https://6684fb0e56e7503d1ae1da81.mockapi.io/crud/User"
    );
    setUserData(userDataList.data);
  };

  const handleDelete = async(fetchId)=>{
    await axios.delete(`https://6684fb0e56e7503d1ae1da81.mockapi.io/crud/User/${fetchId}`);
    loadData();
  };
  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.length === 0 ?(
              <tr>
                <td colSpan="5"><Loader /></td>
              </tr>
            ):
              userData.map(user=> (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.Name}</td>
                  <td>{user.UserName}</td>
                  <td>{user.Email}</td>
                  <td>
                    <Link to={`/SingleUser/${user.id}`} className="btn border bg-primary text-white mx-1">
                      <FaEye />
                    </Link>
                    <Link to={`/EditUser/${user.id}`} className="btn border border-3 border-primary text-primary mx-1">
                      <GrEdit />
                    </Link>
                    <button className="btn border bg-danger text-white mx-1" onClick={()=>handleDelete(user.id)}>
                      <RiDeleteBin5Fill />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
