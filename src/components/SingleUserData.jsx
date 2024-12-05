// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUserData = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    loadSingleData();
  },[])
  const {idfetch} = useParams();
  const loadSingleData = async ()=>{
    let singleData = await axios.get(`https://6684fb0e56e7503d1ae1da81.mockapi.io/crud/User/${idfetch}`)
    setData(singleData.data);
  }
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-4 mt-5 border border-2 mx-auto">
          <h1 className="text-center">{data.Name}</h1>
           <p><b>User ID: </b>{data.id}</p>
           <p><b>Name: </b>{data.Name}</p>
           <p><b>UserName: </b>{data.UserName}</p>
           <p><b>Email: </b>{data.Email}</p>
        </div>
      </div>
      </div> 
    </>
  );
};

export default SingleUserData;
