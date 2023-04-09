const addtendanceModel = require("../../model/attendanceModel");
const attendanceValidator = require("../../ajvValidator/attendanceValidator");
const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
require("ajv-keywords");
require("ajv-errors")(ajv);
const { startOfDay, endOfDay } = require("date-fns");
const ErrorResponse = require("../../utils/errorResponse");
const staffModel = require("../../model/staffModel");

exports.addAttendance = async (req, res, next) => {
  try {
    const orgId = req.org._id.toString();
    const today = new Date();
    const todaISOString = today.toISOString();

    const data = {
      date: todaISOString,
      organization: orgId,
      staff: req.params.staffId,
      attendanceType: req.body.attendanceType,
    };
    const validate = ajv.compile(attendanceValidator);
    const valid = validate(data);

    if (!valid) {
      return next(new ErrorResponse(validate.errors, 500));
    }

    const todayStart = startOfDay(today);
    const todayEnd = endOfDay(today);
    const alreadyRecord = await addtendanceModel
      .findOne({
        staff: req.params.staffId,
        organization: orgId,
        date: { $gte: todayStart, $lte: todayEnd },
      })
      .sort({ date: -1 });
    if (!alreadyRecord) {
      const attendanceData = await addtendanceModel.create(data);
      res.status(201).json({ sucess: true, message: attendanceData });
    } else if (alreadyRecord.attendanceType !== data.attendanceType) {
      alreadyRecord.isEditedRecord = true;
      alreadyRecord.save();
      const attendanceData = await addtendanceModel.create(data);
      res.status(201).json({ sucess: true, message: attendanceData });
    } else {
      res.status(200).json({ sucess: true });
    }
  } catch (error) {
    console.log("catch in addAttendance", error);
    next(error);
  }
};

exports.overTime = async (req, res, next) => {
  try {
    const orgId = req.org._id.toString();
    const today = new Date();
    const todayStart = startOfDay(today);
    const todayEnd = endOfDay(today);
    const alreadyRecord = await addtendanceModel
      .findOne({
        staff: req.params.staffId,
        organization: orgId,
        date: { $gte: todayStart, $lte: todayEnd },
      })
      .sort({ date: -1 });

    if (!alreadyRecord) {
      return next(new ErrorResponse("You not fllup attendance today", 401));
    }

    const staffAttendanceType = alreadyRecord.attendanceType;
    if (staffAttendanceType === "A" || staffAttendanceType === "PL") {
      return next(
        new ErrorResponse("Overtime not allow in appcent and paid leave", 401)
      );
    }

    const overtime = {
      totalHourOfWork: req.body.totalHourOfWork,
      perHourRupee: req.body.perHourRupee,
    };

    alreadyRecord.overtime = overtime;
    alreadyRecord.save();
    return res.status(200).json({ status: true, message: alreadyRecord });
  } catch (error) {
    console.log("catch in overTime");
    next(error);
  }
};

exports.fine = async (req, res, next) => {
  try {
    const orgId = req.org._id.toString();
    const today = new Date();
    const todayStart = startOfDay(today);
    const todayEnd = endOfDay(today);
    const alreadyRecord = await addtendanceModel
      .findOne({
        staff: req.params.staffId,
        organization: orgId,
        date: { $gte: todayStart, $lte: todayEnd },
      })
      .sort({ date: -1 });

    if (!alreadyRecord) {
      return next(new ErrorResponse("You not fllup attendance today", 401));
    }

    const staffAttendanceType = alreadyRecord.attendanceType;
    if (staffAttendanceType === "A" || staffAttendanceType === "PL") {
      return next(
        new ErrorResponse("fine not allow in appcent and paid leave", 401)
      );
    }
    const fine = {
      totalHourOfLateEntryOrEaryOut: req.body.totalHourOfLateEntryOrEaryOut,
      perHourRupee: req.body.perHourRupee,
    };
    alreadyRecord.fine = fine;
    alreadyRecord.save();
    return res.status(200).json({ status: true, message: alreadyRecord });
  } catch (error) {
    console.log("catch in fine");
    next(error);
  }
};

async function findTodayStaff() {
  const orgId = req.org._id;
  const myDate = new Date();
  const dayOfWeekIndex = parseInt(getDay(myDate));
  const orgStaffList = await staffModel.find({
    organization: orgId,
  });

  const attendanceList = [];
  await orgStaffList.reduce(async (prv, staffData) => {
    await prv;
    const staff = staffData.workingWeekDay;
    if (staff[dayOfWeekIndex] === 1) attendanceList.push(staffData);
  }, Promise.resolve());
  return { attendanceList, orgStaffList };
}
exports.summaryData = async (req, res, next) => {
  try {
    const orgId = req.org._id.toString();
    const today = new Date();
    const todayStart = startOfDay(today);
    const todayEnd = endOfDay(today);

    const alreadyRecord = await addtendanceModel.find({
      isEditedRecord: false,
      organization: orgId,
      date: { $gte: todayStart, $lte: todayEnd },
    });
    const attendanceList = [];
    let P = 0,
      A = 0,
      HD = 0,
      PL = 0,
      OVERTIME = 0,
      totalOverPrice = 0,
      FINE = 0,
      totalFine = 0;
    await alreadyRecord.reduce(async (prv, alreadyRecord) => {
      await prv;
      const type = alreadyRecord.attendanceType;
      if (type === "P") {
        P++;
      } else if (type === "A") {
        A++;
      } else if (type === "HD") {
        HD++;
      } else if (type === "PL") {
        PL++;
      }

      if (alreadyRecord.overtime.totalHourOfWork !== NaN) {
        const hrOver = alreadyRecord.overtime.totalHourOfWork;
        const priceOver = alreadyRecord.overtime.perHourRupee;

        if (hrOver && priceOver) {
          OVERTIME += hrOver;
          totalOverPrice += hrOver * priceOver;
        }
      }
      if (alreadyRecord.fine.perHourRupee !== NaN) {
        const hrOver = alreadyRecord.fine.totalHourOfLateEntryOrEaryOut;
        const priceOver = alreadyRecord.fine.perHourRupee;

        if (hrOver && priceOver) {
          FINE += hrOver;
          totalFine += hrOver * priceOver;
        }
      }
    }, Promise.resolve());

    res.status(200).json({
      status: true,
      message: {
        P: P,
        A: A,
        HD: HD,
        PL: PL,
        OVERTIME: OVERTIME,
        totalOverPrice: totalOverPrice,
        FINE: FINE,
        totalFine: totalFine,
      },
    });
  } catch (error) {
    next(error);
  }
};
