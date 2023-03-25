import React from "react";
import Sidebar from "./Sidebar";
import "./staff.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import People from '../images/people.svg';
import { useNavigate } from "react-router-dom";
const Staff = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="main-div-staff">
        <Sidebar />
        <div className="staff-body">
          <div className="sraff-summry">
            <h3 style={{color:"black"}}>Staff Payment Summary</h3>
            <Button variant="contained" size="large" className="add-btn" onClick={()=>{Navigate('/add/staff')}}>
              <PersonAddAlt1Icon />
              Add Staff
            </Button>
          </div>
          <div className="total-staff-heading">
            <div className="bal">
              <h3 className="mb-3" style={{color:"black"}}>Overall Balance</h3>
              <h4 className="mt-3 mb-0" style={{color:"black"}}>₹ 25,718.96</h4>
              <p className="mb-0" style={{color:"black"}}>Total Pending</p>
            </div>
          </div>
          <div className="filter-staff">
            <button>
              {" "}
              <FilterAltIcon /> Filter
            </button>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <TextField fullWidth label="Search" id="fullWidth" />
            </Box>
          </div>
          <div className="mt-3">
            <p
              style={{ fontSize: "18px", fontWeight: "600", color: "#5a5a5a" }}
            >
              Monthly
            </p>
          </div>
        <div className="field-box" onClick={()=>{Navigate('/stafflist')}}>
         <div className="staff-name-box">
          <div className="left-box">
           <img src={People} />
           <p style={{color:"black"}}>Darshit</p>
           </div>
           <div className="right-box" >
            <p style={{color:"black"}}>Pending</p>
            <p style={{color:"black"}}>1219.35</p>
           </div>
         </div>

        </div>



        </div>
      </div>
    </>
  );
};

export default Staff;
