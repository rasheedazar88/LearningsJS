import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ADD_EMPLOYEE } from '../../../redux/actions/Employee'

const Employees = (props) => {

    const [empDetails, setempDetails] = useState({
        fname: '', lname: '', tel: '', email: ''
    })
  return (
    <div className='container w-25'>
        {/* <div className="form-group">
            <label>Employee ID</label>
            <input type={"text"} className="form-control" />
        </div> */}
        <div className="form-group">
            <label>First Name</label>
            <input type={"text"} name="fname" value={empDetails.fname} className="form-control" />
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input type={"text"} name="lname" value={empDetails.lname} className="form-control" />
        </div>
        <div className="form-group">
            <label>Contact No</label>
            <input type={"tel"} name="tel" value={empDetails.tel} className="form-control" />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type={"email"} name="email" value={empDetails.email} className="form-control" />
        </div>
        <div className="form-group">
            <button className='form-control' onClick={()=>props.ADD_EMPLOYEE}>Submit</button>
        </div>
    </div>
  )
}



const mapsStateToProps =state=>{
    return {
        empDetails: state.empDetails
    }
}
const mapsDispatchtoProps = dispatch=>{
    return {
        ADD_EMPLOYEE: ()=>dispatch(ADD_EMPLOYEE())
    }
}

export default connect(mapsStateToProps, mapsDispatchtoProps)(Employees)