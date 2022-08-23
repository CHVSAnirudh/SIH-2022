import React from 'react'
import { useHistory } from "react-router-dom";
import './logoutButton.css'
const LogoutButton = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className='header'>
      <div 
      onClick={handleLogout}
      className="logout"
      >
        Logout
      </div>
    </div>
  )
}

export default LogoutButton