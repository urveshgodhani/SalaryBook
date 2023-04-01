const staffModel = require("../../model/staffModel");
const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");
const ajv = new Ajv();
addFormats(ajv);
require("ajv-keywords");
const staffValidator = require("../../ajvValidator/staffValidator");
const ErrorResponse = require("../../utils/errorResponse");
const {
  eachDayOfInterval,
  format,
  startOfMonth,
  endOfMonth,
  getDay,
} = require("date-fns");

function findDayOfWorking(daysOfWeek) {
  const currentDate = new Date();
  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const selectedDates = eachDayOfInterval({ start: startDate, end: endDate })
    .filter((date) => daysOfWeek[date.getDay()] === 1)
    .map((date) => format(date, "yyyy-MM-dd"));
  return selectedDates;
}

exports.addStaff = async (req, res, next) => {
  try {
    const workingWeekDay = JSON.parse(req.body.workingWeekDay);
    const DayOfWorking = findDayOfWorking(workingWeekDay);
    const NoOFDays = req.body.salary.base / DayOfWorking.length;
    const data = {
      name: req.body.name,
      email: req.body.email,
      salary: {
        base: req.body.salary.base,
        pf: req.body.salary.pf,
      },
      organization: req.org._id.toString(),
      perDaySalary: NoOFDays,
      workingWeekDay: workingWeekDay,
    };
    const validate = ajv.compile(staffValidator);
    const valid = validate(data);

    if (!valid) {
      return res
        .status(500)
        .json({ sucess: false, message: validate.errors[0] });
    } else {
      const staffData = await staffModel.create(data);
      res.status(200).json({ sucess: true, message: staffData });
    }
  } catch (error) {
    console.log("Staff is creat error");
    next(error);
  }
};

exports.dailyAttendanceForStaff = async (req, res, next) => {
  try {
    const orgId = req.org._id;
    const myDate = new Date();
    const dayOfWeekIndex = parseInt(getDay(myDate));
    // const workingWeekDay = `workingWeekDay.${dayOfWeekIndex}`;
    // console.log(workingWeekDay);
    const orgStaffList = await staffModel.find({
      organization: orgId,
    });
    const attendanceList = [];
    await orgStaffList.reduce(async (prv, staffData) => {
      await prv;
      const staff = staffData.workingWeekDay;
      if (staff[dayOfWeekIndex] === 1) attendanceList.push(staffData);
    }, Promise.resolve());
    res.status(200).json({ AttendanceList });
  } catch (error) {
    next(error);
  }
};
