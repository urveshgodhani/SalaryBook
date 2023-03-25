import React from "react";
import Sidebar from "./Sidebar";
import "./attendance.scss";
import { DateObject } from "react-multi-date-picker";
import { useRef, useState } from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { TextField } from "@mui/material";
import DatePicker from "react-multi-date-picker";
const Attendance = () => {
  const datePickerRef = useRef();
  const [date, setDate] = useState(new DateObject());
  const a = new DateObject();
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="attendance-body">
          <h3 style={{ color: "black" }}>Attendance Summary</h3>
          <div className="atten-date">
            <div className="month-date">
              <p>{date.day}</p>
              <p>{date.month.name}</p>
              <button
                onClick={() => datePickerRef.current.openCalendar()}
                className="btn--1"
              >
                <EventNoteIcon className="icon" />
              </button>
              <DatePicker
                ref={datePickerRef}
                onChange={setDate}
                minDate={new Date().setDate(1)}
                maxDate={new Date().setDate(a.day)}
              />
            </div>
            <div className="sec-attands">
              <div style={{ borderLeft: "0px" }}>
                <p>Total Staff</p>
                <p>1</p>
              </div>
              <div>
                <p>Present</p>
                <p>0</p>
              </div>
              <div>
                <p>Absent</p>
                <p>0</p>
              </div>
              <div>
                <p>Half Day</p>
                <p>0</p>
              </div>
              <div>
                <p>Overtime hours</p>
                <p>00.00</p>
              </div>
              <div>
                <p>Fine hours</p>
                <p>00.00</p>
              </div>
              <div>
                <p>Paid Leave</p>
                <p>1</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <TextField fullWidth label="Search" id="fullWidth" />
          </div>
          <p style={{ marginTop: "20px" }}>Regular</p>
          <div className="attendances">
            <div className="atten-left">
              <div>
                <p style={{ color: "black", fontWeight: "500" }}>darshit</p>
                <p style={{ fontSize: "13px" }}>4.00 Hrs</p>
              </div>
              <div>
                {/* <p style={{color:"black"}}>Note:Hello</p> */}
                <p style={{ color: "#007EFE" }}>
                  <span>Edit Note</span> | <span>View Logs</span>
                </p>
              </div>
            </div>
            <div className="atten-right">
              <button>
                <span style={{ fontSize: "15px", fontWeight: "500" }}>P |</span>{" "}
                Present
              </button>
              <button>
                {" "}
                <span style={{ fontSize: "15px", fontWeight: "500" }}>
                  HD |
                </span>{" "}
                Half Day
              </button>
              <button>
                {" "}
                <span style={{ fontSize: "15px", fontWeight: "500" }}>
                  A |
                </span>{" "}
                Absent
              </button>
              <button>
                {" "}
                <span style={{ fontSize: "15px", fontWeight: "500" }}>
                  F |
                </span>{" "}
                Fine
              </button>
              <button>
                {" "}
                <span style={{ fontSize: "15px", fontWeight: "500" }}>
                  OT |
                </span>{" "}
                OverTime
              </button>
              <button>
                {" "}
                <span style={{ fontSize: "15px", fontWeight: "500" }}>
                  L |
                </span>{" "}
                Paid Leave
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
