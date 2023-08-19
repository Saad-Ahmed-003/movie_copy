import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faList } from '@fortawesome/free-solid-svg-icons';
import AutoSuggestComponent from './AutoSuggestComponent'; // Import the AutoSuggestComponent

const Header = () => {
  const iconStyle = {
    color:"white",
  };
  return (
    <header className="navbar bg-dark">
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn border"
          data-bs-toggle="collapse"
          data-bs-target="#sideBar"
          aria-controls="sideBar"
          aria-expanded="false"
          aria-label="Toggle sidebar"
        >
          <FontAwesomeIcon icon={faList} style={iconStyle}/>
        </button>
        <a href="/" className="navbar-brand text-light">
          <FontAwesomeIcon icon={faCode} />
          Review-app
        </a>
      </div>
      <div className="d-flex">
        <AutoSuggestComponent /> {/* AutoSuggestComponent integrated here */}
      </div>
    </div>
  </header>
  
  );
};

export default Header;
