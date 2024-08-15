import React, { useContext, useEffect, useState } from 'react';
import { useAuthContext } from '../../context/AuthContext'

const Profile = () => {
  
  const {authUser} = useAuthContext();
  

  if (!authUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-5 backdrop-blur-md rounded-2xl">
  <div className="w-36 h-36 rounded-full overflow-hidden">
    <img src={authUser.profilePic || '/default-avatar.png'} alt="Profile Avatar" className="w-full h-full object-cover" />
  </div>
  <div className="text-center mt-5">
    <h1 className="text-2xl font-bold">{authUser.fullName}</h1>
    <p className="text-lg text-gray-500">@{authUser.username}</p>
  </div>
</div>
  );
};

export default Profile;