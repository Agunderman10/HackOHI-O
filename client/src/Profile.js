import React,{useEffect, useState} from 'react';

import './profile.css';
function Profile() {
  const [user,setUser]= useState({});
  useEffect(()=>{
    getData();
  },[])
// getting data and storing it into getData.
  const getData =async ()=>{
    const response=await fetch(`http://localhost:8080/coder-profile/1`)
    const data=await response.json(); 
    console.log(data);
    setUser(data);
  }
  return (    
        <div className="w3-display-container">
          <img src={user.coder_profile_pic} alt="Avatar"/>
            <h2>{user.coder_name}</h2>
          <p><i className></i>{user.coder_bio}</p>
          <p><i className></i>{user.coder_location}</p>
          <p><i className></i>{user.coder_email}</p>
          <p><i className></i>1224435534</p>
  </div>
  );
}

export default Profile;
