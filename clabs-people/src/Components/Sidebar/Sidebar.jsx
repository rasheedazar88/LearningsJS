import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPerson, faPersonDigging, faTrainTram, faUserTimes, faStickyNote, faFile, faHandsHelping, faTruckLoading, faMap, faBarsProgress, faReceipt, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className='sidebar d-flex flex-column justify-content-between'>
        <ul className='navbar-nav text-center'>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faBars}/><span className='mt-1'>Home</span></Link></li>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faPerson}/><span className='mt-1'>Service</span></Link></li>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faPersonDigging}/><span className='mt-1'>Self-service</span></Link></li>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faTrainTram}/><span className='mt-1'>Leave Tracker</span></Link></li>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faUserTimes}/><span className='mt-1'>Time Tracker</span></Link></li>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faStickyNote}/><span className='mt-1'>Attendance</span></Link></li>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faFile}/><span className='mt-1'>Files</span></Link></li>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faHandsHelping}/><span className='mt-1'>Organization</span></Link></li>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faTruckLoading}/><span className='mt-1'>Training</span></Link></li>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faMap}/><span className='mt-1'>Travel</span></Link></li>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faBarsProgress}/><span className='mt-1'>More</span></Link></li>
        </ul>
        <ul>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faReceipt}/><span className='mt-1'>Reports</span></Link></li>
            <li className='nav-item my-1'><Link className='mt-2 text-white' to={"/"}><FontAwesomeIcon icon={faBarsStaggered}/><span className='mt-1'>Settings</span></Link></li>
        </ul>
    </nav>
  )
}
