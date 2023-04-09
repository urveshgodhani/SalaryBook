const ErrorResponse = require("../utils/errorResponse");

function error(err, req, res, next) {
  let error = err;

  console.log(err, error, error.message, "0000");

  if (err.code === 11000) {
    const value = Object.keys(error.keyPattern);
    const msg = `${value} is registor.`;
    error = new ErrorResponse(msg, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Server Error" });
}

module.exports = error;
