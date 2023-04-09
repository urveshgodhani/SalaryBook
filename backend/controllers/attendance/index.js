const express = require("express");
const { addAttendance, overTime, fine, summaryData } = require("./controller");
const { protect } = require("../../middleware/auth");

const router = express.Router();

router.post("/add/:staffId", protect, addAttendance);
router.post("/overtime/:staffId", protect, overTime);
router.post("/fine/:staffId", protect, fine);
router.get("/summaryData", protect, summaryData);

module.exports = router;
