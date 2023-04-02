const objectIdRegex = /^[a-f\d]{24}$/i;
const attendanceValidator = {
  title: "Attendance",
  type: "object",
  required: ["date", "organization", "staff", "attendanceType"],
  properties: {
    date: {
      type: "string",
      format: "datetime",
      errorMessage: {
        format: "Only Date-Time formate allow",
      },
    },
    organization: {
      type: "string",
      pattern: objectIdRegex.source,
      errorMessage: {
        pattern: "Invalid ObjectID format",
      },
    },
    staff: {
      type: "string",
      pattern: objectIdRegex.source,
      errorMessage: {
        pattern: "Invalid ObjectID format",
      },
    },
    attendanceType: {
      type: "string",
      enum: ["P", "A", "HD", "PL"],
      errorMessage: {
        type: "AttendanceType must be a string",
      },
    },
    overtime: {
      type: "object",
      properties: {
        perHourRupee: { type: "number" },
        totalHourOfWork: { type: "number" },
      },
      errorMessage: {
        properties: "PerHourRupee and TotalHourOfWork must be a fill both",
      },
    },
    fine: {
      type: "object",
      properties: {
        perHourRupee: { type: "number" },
        totalHourOfLateEntryOrEaryOut: { type: "number" },
      },
      errorMessage: {
        properties: "PerHourRupee and TotalHour must be a fill both",
      },
    },
  },
  additionalProperties: false,
};

module.exports = attendanceValidator;
