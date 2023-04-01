const addtendanceModel = require("../../model/attendanceModel");

exports.addAttendance = async (req, res, next) => {
  console.log(req.org, req.params.staffId);
  const attendanceData = await addtendanceModel.create({
    date: new Date(),
    organization: req.org._id.toString(),
    staff: req.params.staffId,
    attendanceType: req.body.attendanceType,
  });
  res.status(200).json(attendanceData);
};
