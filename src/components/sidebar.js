import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

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
          <span className="ms-1 d-none d-sm-inline">Home</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <span className="ms-1 d-none d-sm-inline">Movies</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle ">
          <span className="ms-1 d-none d-sm-inline">Books</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <span className="ms-1 d-none d-sm-inline">eSports</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <span className="ms-1 d-none d-sm-inline">Sports</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <span className="ms-1 d-none d-sm-inline">Other</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
          <span className="ms-1 d-none d-sm-inline">Contact</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 align-middle">
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
