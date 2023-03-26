import React from "react";
import Sidebar from "./Sidebar";
import "./stafflist.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import People from "../images/people.svg";
import DescriptionIcon from "@mui/icons-material/Description";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const StaffList = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="staff-list-body">
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              Navigate("/staff");
            }}
            className="d-flex align-items-center m-0"
          >
            <span>
              <ArrowBackIcon style={{ color: "#267DFD" }} />
            </span>
            Back
          </p>
          <div className="list-header">
            <div className="d-flex">
              <img src={People} />
              <h4
                className="ms-3 mb-0"
                style={{ color: "black", fontWeight: "500" }}
              >
                darshit
              </h4>
            </div>
            <div className="list-datas">
              <div>
                <p style={{ fontSize: "12px" }}>Mobile Number</p>
                <p style={{ color: "black", fontWeight: "500" }}>
                  9377098863
                </p>{" "}
              </div>
              <div>
                <p style={{ fontSize: "12px" }}>Staff Type</p>
                <p style={{ color: "black", fontWeight: "500" }}>
                  Monthly
                </p>{" "}
              </div>
              <div style={{ border: "0px" }}>
                <p style={{ fontSize: "12px" }}>Monthly Salary</p>
                <p style={{ color: "black", fontWeight: "500" }}>
                  ₹ 15,000
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="list-category">
            <div>
              {" "}
              <DescriptionIcon /> Summary
            </div>
            <div>
              {" "}
              <TouchAppIcon /> Attendance
            </div>
            <div>
              {" "}
              <RequestQuoteIcon /> Payments
            </div>
            <div>
              {" "}
              <ReceiptIcon /> Pay slip
            </div>
            <div>
              {" "}
              <HourglassBottomIcon />
              Over Time
            </div>
          </div>

          <div className="over-bal-list">
            <div>
              <p>
                Overall Balance{" "}
                <span style={{ fontWeight: "600", marginLeft: "10px" }}>
                  ₹ 843.74
                </span>
              </p>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed staffAccordionss-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <p style={{ width: "275px", textAlign: "start" }}>
                      March Net Salary
                    </p>
                    <p style={{ width: "275px", textAlign: "start" }}>
                      01 Mar 2023-24 Mar 2023
                    </p>
                    <p style={{ width: "275px", textAlign: "end" }}>₹ 843.74</p>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div className="d-flex justify-content-between">
                      <p style={{ width: "275px", textAlign: "start" }}>
                        Monthly Gross Salary
                      </p>
                      <p style={{ width: "275px", textAlign: "start" }}>
                        Basic DA &nbsp;<a href="/editsalary" style={{color:'#0066fd',cursor:'pointer'}}>Edit Selary</a>
                      </p>
                      <p style={{ width: "275px", textAlign: "end" }}>
                        ₹ 15,000
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p style={{ width: "275px", textAlign: "start" }}>
                        Earnings
                      </p>
                      <div>
                        <p style={{ width: "275px", textAlign: "start" }}>
                          2 Payable Days |0:00 Hrs Hrs Overtime{" "}
                        </p>
                      </div>
                      <p style={{ width: "275px", textAlign: "end" }}>
                        ₹ 967.74
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p style={{ width: "275px", textAlign: "start" }}>
                        Deduction
                      </p>
                      <p style={{ width: "275px", textAlign: "start" }}>
                        Provident Fund (PF){" "}
                      </p>
                      <p style={{ width: "275px", textAlign: "end" }}>₹ 116</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="privous-month">
            <p>Previous Month</p>
            <Button variant="outlined">Add Previous Month</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffList;
