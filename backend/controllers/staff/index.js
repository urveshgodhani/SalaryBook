const express = require("express");
const { addStaff, dailyAttendanceForStaff } = require("./controllers.js");
const { protect } = require("../../middleware/auth");
const router = express.Router();

router.post("/add", protect, addStaff);
router.get("/dailyAttendanceForStaff", protect, dailyAttendanceForStaff);

module.exports = router;
