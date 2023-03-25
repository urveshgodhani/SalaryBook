import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./addstaff.scss";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const AddStaff = () => {
  const Navigate = useNavigate();
  const [toggle, setToggle] = useState(1);
  const [salary, setSalary] = useState(0);
  const [pf, setPF] = useState(0);

  const handlePF = (event) => {
    const PF = event.target.value;
    setPF(salary / PF);
  };
  const Hand = salary - pf;

  const CTC = +salary + pf;

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="add-staff-body">
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
          <h3 className="mt-3" style={{ color: "black" }}>
            Add Regular Staff
          </h3>
          <div className="step-form">
            <div className="form-steps">
              <div className={`${toggle === 1 ? "toggles" : "circle"}`}>1</div>
              <div className="datas">
                <p>Step 1</p>
                <p style={{ color: "black" }}>Basic Details</p>
              </div>
            </div>
            <div className="lines">
              <div className="line"></div>
            </div>
            <div className="form-steps step-2">
              <div className={`${toggle === 2 ? "toggles" : "circle"}`}>2</div>
              <div className="datas">
                <p>Step 2</p>
                <p style={{ color: "black" }}>Salary Structure</p>
              </div>
            </div>
          </div>
          {toggle === 1 && (
            <>
              {" "}
              <div className="step1-details">
                <div className="s1">
                  <p>Basic Details</p>
                </div>
                <div className="s2">
                  <p>Staff Name</p>{" "}
                  <TextField
                    id="demo-helper-text-aligned-no-helper"
                    label="Enter Staff Name"
                    className="name-field"
                  />
                </div>
                <div className="s3">
                  <p>Phone Number</p>{" "}
                  <TextField
                    id="demo-helper-text-aligned-no-helper"
                    label="Enter Number"
                    className="name-field"
                  />
                </div>
              </div>
            </>
          )}
          {toggle == 2 && (
            <>
              <div className="form-step2">
                <div className="accordions">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item accordion-item1">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed ac-btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          <p>Earnings</p>
                          <p>₹ {salary} / Month</p>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div className="basicDA">
                            <p>Basic + DA</p>
                            <TextField
                              id="demo-helper-text-misaligned"
                              label="Enter Amount"
                              onChange={(e) => {
                                setSalary(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item accordion-item2">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button
                          class="accordion-button collapsed ac-btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          <p>Deductions</p>
                          <p>₹ {Math.floor(pf)} / Month</p>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div className="basicDA">
                            <p>Provident Fund (PF) </p>
                            <TextField
                              id="demo-helper-text-misaligned"
                              label="Enter Variable(%)"
                              onChange={(e) => {
                                handlePF(e);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="step2-bottoms">
                    <p>
                      Net Pay In Hand <span>(Gross Pay - Deductions)</span>
                    </p>
                    <p>₹ {Math.floor(Hand)} / Month</p>
                  </div>
                </div>
                <div className="accordions">
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    Employer's Contribution
                  </p>
                  <div className="d-flex w-50 justify-content-between">
                    <p>Provident Fund (PF)</p>
                    <p>₹ {Math.floor(pf)}</p>
                  </div>
                  <div className="d-flex w-50 justify-content-between">
                    <p>CTC (Gross Pay + Contributions)</p>
                    <p>₹ {Math.floor(CTC)}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="bottom-btn-div">
            <div className="btn-bottom">
              {toggle === 1 && (
                <Button
                  variant="outlined"
                  onClick={() => {
                    Navigate("/staff");
                  }}
                >
                  Cancel
                </Button>
              )}
              {toggle === 2 && (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setToggle(1);
                  }}
                >
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={() => {
                  setToggle(2);
                }}
              >
                Next
              </Button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStaff;
