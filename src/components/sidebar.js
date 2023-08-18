import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEnvelope, faFaceLaughSquint, faFilm, faGhost, faHome, faInfoCircle, faPersonRunning, faPoop, faUser, faVolleyballBall } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div
  className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark collapse collapse-horizontal"
  id="sideBar"
>
  <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
    <ul
      className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
      id="menu"
    >
      <li className="nav-item">
        <a href="#" className="nav-link align-middle px-0">
          <FontAwesomeIcon icon={faHome}/>
          <span className="ms-1 d-none d-sm-inline">Home</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <FontAwesomeIcon icon={faFilm}/>
          <span className="ms-1 d-none d-sm-inline">Drama</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle ">
          <FontAwesomeIcon icon={faPersonRunning}/>
          <span className="ms-1 d-none d-sm-inline">Action</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <FontAwesomeIcon icon={faFaceLaughSquint}/>
          <span className="ms-1 d-none d-sm-inline">Comedy</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <FontAwesomeIcon icon={faVolleyballBall}/>
          <span className="ms-1 d-none d-sm-inline">Sports</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <FontAwesomeIcon icon={faGhost}/>
          <span className="ms-1 d-none d-sm-inline">Horror</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <FontAwesomeIcon icon={faBook}/>
          <span className="ms-1 d-none d-sm-inline">Documentary</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <FontAwesomeIcon icon={faUser}/>
          <span className="ms-1 d-none d-sm-inline">Biopic</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <FontAwesomeIcon icon={faEnvelope}/>
          <span className="ms-1 d-none d-sm-inline">Contact</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <FontAwesomeIcon icon={faInfoCircle}/>
          <span className="ms-1 d-none d-sm-inline">Info</span>
        </a>
      </li>
    </ul>
    <hr />
  </div>
</div>
  );
};

export default Sidebar;
