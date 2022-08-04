import React from "react";
import { logo, user } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPlusCircle, faSearch, faClipboardQuestion, faBell } from "@fortawesome/free-solid-svg-icons";
import './Header.css'

export default function Header() {
  return (
    <nav>
      <div className="row p-3">
        <div className="col-md-3 d-flex align-items-center justify-content-start">
          <img className="" src={logo} alt="logo" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center" >
          <div className="search d-flex align-items-center justify-content-center position-relative">
            <input className="text" type={"text"} placeholder="Search Employee" />
            <span className="mx-2 position-absolute icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-end">
            <ul className="navbar-nav flex-row float-right">
                <li className="cl-menu-icon nav-item mx-3 px-2">
                    <a><FontAwesomeIcon icon={faPlusCircle} /></a>
                </li>
                <li className="cl-menu-icon nav-item mx-3 px-2">
                   <a><FontAwesomeIcon icon={faClipboardQuestion} /></a>
                </li>
                <li className="cl-menu-icon nav-item mx-3 px-2">
                    <a><FontAwesomeIcon icon={faBell} /></a>
                </li>
                <li className="cl-menu-icon nav-item mx-3 px-2">
                    <a><img src={user} alt="user" /></a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}
