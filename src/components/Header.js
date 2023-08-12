import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

const Header = () => {
  return (
    <header className="navbar bg-body-tertiaty bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <div className="">
      <button
        className="btn border"
        data-bs-toggle="collapse"
        data-bs-target="#sideBar"
        aria-controls="sideBar"
        aria-expanded="false"
        aria-label="Toggle sidebar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <a href="#" className="navbar-brand ">  
        Review-app
      </a>
    </div>
  </div>
</header>
  );
};

export default Header;
