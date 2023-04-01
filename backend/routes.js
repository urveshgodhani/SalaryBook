const express = require("express");
const auth = require("./controllers/auth/index");
const staff = require("./controllers/staff/index");
const attandance = require("./controllers/attendance/index");
const router = express.Router();

router.use("/api/v1/auth", auth);
router.use("/api/v1/staff", staff);
router.use("/api/v1/attandance", attandance);

module.exports = router;
