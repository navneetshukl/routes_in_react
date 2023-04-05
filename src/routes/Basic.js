import React from 'react'
import { useNavigate } from 'react-router-dom';

function Basic() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /home
    navigate('/home');
  };
  const navigateToAbout = () => {
    // 👇️ navigate to /home
    navigate('/about');
  };
  return (
    <div>
      <button onClick={navigateToHome}>Home Page</button>
      <button onClick={navigateToAbout}>About Page</button>

    </div>
  )
}

export default Basic
