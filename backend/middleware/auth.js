const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const organizationModel = require("../model/organizationModel");

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.org = await organizationModel.findById(decoded.id);
    next();
  } catch {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }
};
