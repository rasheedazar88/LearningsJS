import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './Service.css'
import Employees from "../Employees/Employees";


export default function Service() {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-between">
        <h4>All Services</h4>
        <div className="search d-flex align-items-center justify-content-center position-relative">
          <input className="text" type={"text"} placeholder="Search Employee" />
          <span className="mx-2 position-absolute icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
      </div>

      <div className="service d-flex">
        <Link to={"/employees"} className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i1"></i>
            </label>
            <h6>Add Employee</h6>
          </span>
        </Link>

        <a className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i2"></i>
            </label>
            <h6>Time Tracker</h6>
          </span>
        </a>

        <a className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i3"></i>
            </label>
            <h6>Attendance</h6>
          </span>
        </a>

        <a className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i4"></i>
            </label>
            <h6>Files</h6>
          </span>
        </a>

        <a className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i5"></i>
            </label>
            <h6>Organization</h6>
          </span>
        </a>

        <a className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i6"></i>
            </label>
            <h6>Training</h6>
          </span>
        </a>

        <a className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i7"></i>
            </label>
            <h6>Travel</h6>
          </span>
        </a>

        <a className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i8"></i>
            </label>
            <h6>Compensation</h6>
          </span>
        </a>

        <a className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i9"></i>
            </label>
            <h6>Performance</h6>
          </span>
        </a>

        <a className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i10"></i>
            </label>
            <h6>Cases</h6>
          </span>
        </a>

        <a className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i11"></i>
            </label>
            <h6>Annoncements</h6>
          </span>
        </a>

        <a className="mr-3 mb-3">
          <span className="">
            <label className="search-label">
              <i className="service-icon i12"></i>
            </label>
            <h6>Office Readlines</h6>
          </span>
        </a>

      </div>
    </React.Fragment>
  );
}
