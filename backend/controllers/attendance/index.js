const express = require("express");
const { addAttendance } = require("./controller");
const { protect } = require("../../middleware/auth");

const router = express.Router();

router.post("/add/:staffId", protect, addAttendance);

module.exports = router;
