import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Profile = () => {
  const { token } = useSelector(state => state.auth);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios.get('/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => setProfileData(response.data))
    .catch(error => console.error('Error fetching profile data:', error));
  }, [token]);

  if (!profileData) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Profile</h1>
      <p>Name: {profileData.name}</p>
      <p>Email: {profileData.email}</p>
    </div>
  );
};

export default Profile;
