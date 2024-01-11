import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileAction } from '../../redux/slices/users/usersSlice';
import './ProfileUpdate.css'

function ProfileUpdate() {
  const { userId } = useParams();
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    // Add other fields for shipping address as needed
  });

  const dispatch = useDispatch();

  // Fetch user profile data from the Redux store
  const { error, loading, profile } = useSelector((state) => state?.users);
  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);

console.log(userId)
  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Send a request to update the user's profile with formData
    axios
      .put(`http://localhost:8080/api/v1/users/user/${userId}`, formData)
      .then((response) => {
        // Handle successful response
        console.log('Profile updated:', response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error updating profile:', error);
      });
  };

  // Function to handle input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='mainUpdateContainer'>
    <div className='formStyle'>
    <p className='updateTitle'>User Profile Update</p>
    <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            className="form-control customInput"
            id="fullname"
            name="fullname"
            placeholder={profile?.user?.fullname}
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control customInput"
            id="email"
            name="email"
            placeholder={profile?.user?.email}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Add more form fields for shipping address as needed */}
        <button type="submit" className="btn btn-warning" style={{ color: 'black' }}>
          Update Profile
        </button>
      </form>

    </div>
     

    </div>
  );
}

export default ProfileUpdate;
