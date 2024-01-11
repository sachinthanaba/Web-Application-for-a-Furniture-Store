import React, { useState, useEffect } from 'react'
import './UpdateProfile.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';


function UpdateProfile() {
    let { id } = useParams();
    const [userdata,setUserData]=useState([])
    useEffect(() => {
        axios
          .get(`http://localhost:8080/api/v1/users/details/${id}`)
          .then((response) => {
            setUserData(response.data);
            console.log(userdata)
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);


  return (
    <div>{userdata.fullname}</div>
  )
}

export default UpdateProfile