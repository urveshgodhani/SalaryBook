const addtendanceModel = require("../../model/attendanceModel");
const attendanceValidator = require("../../ajvValidator/attendanceValidator");
const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

exports.addAttendance = async (req, res, next) => {
  const orgId = req.org._id.toString();
  const data = {
    date: new Date(),
    organization: orgId,
    staff: req.params.staffId,
    attendanceType: req.body.attendanceType,
  };

  const attendanceData = await addtendanceModel.create(data);
  res.status(200).json(attendanceData);
};
