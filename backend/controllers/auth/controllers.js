const organizationModel = require("../../model/organizationModel");
const ErrorResponse = require("../../utils/errorResponse");

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return next(
        new ErrorResponse("Please provide a name , email and password", 400)
      );
    }
    const organization = await organizationModel.create(req.body);
    const token = organization.getSignedJwtToken();
    res.status(200).json({ success: true, token });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(
        new ErrorResponse("Please provide an email and password", 400)
      );
    }

    const organization = await organizationModel.findOne({ email });

    if (!organization) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }

    const isMatch = await organization.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }

    sendTokenResponse(organization, 200, res);
  } catch (error) {
    next(error);
  }
};

const sendTokenResponse = (organization, statusCode, res) => {
  const token = organization.getSignedJwtToken();

  res.status(statusCode).json({
    success: true,
    token,
  });
};
