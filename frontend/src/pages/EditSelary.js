import React from "react";
import Sidebar from "./Sidebar";
import { TextField } from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./editsalary.scss";
import { Button } from "@mui/material";
const EditSelary = () => {
  const Navigate = useNavigate();
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
        <div className="Selary-edit-body w-100 p-3">
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              Navigate("/stafflist");
            }}
            className="d-flex align-items-center m-0"
          >
            <span>
              <ArrowBackIcon style={{ color: "#267DFD" }} />
            </span>
            Back
          </p>
          <h3 style={{ marginTop: "30px" }}>Edit Salary Structure</h3>
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
        </div>
        <div className="editsalary-btn">
          <Button
            variant="outlined"
            onClick={() => {
              Navigate("/stafflist");
            }}
          >
            cancel
          </Button>
          <Button variant="contained" onClick={() => {}}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditSelary;
