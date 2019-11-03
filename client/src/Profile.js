import React, { useEffect, useState } from 'react';
import './profile.css';

function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    getData();
  }, [])
  // getting data and storing it into getData.
  const getData = async () => {
    const response = await fetch(`http://localhost:8080/coder-profile/1`)
    const data = await response.json();
    console.log(data);
    setUser(data);
  }
 
  const image = <img src="propic.png"/>
  const style= {width:window.innerWidth,height:window.innerHeight}
  return (
      <div className="profile main" style={style}>
        <p className="image" placeholder="image">{image}</p>
        <h2 className="name">{user.coder_name}</h2>
        <p className="biotext"><b>About Me-</b></p>
        <p className="bio">{user.coder_bio}</p>
        <p className="loctext"><b>I stay in-</b></p>
        <p className="loc">{user.coder_location}</p>
        <p className="emailtext"><b>You can Reach me at-</b></p>
        <p className="email">{user.coder_email}</p>
      </div>
  );
}    
export default Profile;