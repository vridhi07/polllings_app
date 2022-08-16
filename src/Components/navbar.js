import React from 'react'
import {useHistory} from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  const role = localStorage.getItem('userType');
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Polling App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          {
            role ==='Admin' ? (
          <>
          <li className="nav-item active">
              <a className="nav-link" href="/admindashboard">Dashboard</a>
            </li>
           <li className="nav-item active">
              <a className="nav-link" href="/userlist">Users List</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/addpoll">Add Poll</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" onClick={handleLogout}>Logout</a>
            </li> </>) : (
              <>
              <li className="nav-item active">
                <a className="nav-link" href="/guestdashboard">Dashboard</a>
              </li>
              <li className="nav-item active">
                  <a className="nav-link" onClick={handleLogout}>Logout</a>
              </li>
              </>
            )
          }
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
