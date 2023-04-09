const objectIdRegex = /^[a-f\d]{24}$/i;
const attendanceValidator = {
  title: "Attendance",
  type: "object",
  required: ["date", "organization", "staff", "attendanceType"],
  properties: {
    date: {
      type: "string",
      format: "date-time",
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
    isEditedRecord: {
      type: "boolean",
      default: false,
    },
    overtime: {
      type: "object",
      properties: {
        perHourRupee: { type: "number" },
        totalHourOfWork: { type: "number" },
      },
      errorMessage: {
        "properties.perHourRupee": "PerHourRupee must be a fill",
        "properties.totalHourOfWork": "totalHourOfWork must be a fill",
      },
    },
    fine: {
      type: "object",
      properties: {
        perHourRupee: { type: "number" },
        totalHourOfLateEntryOrEaryOut: { type: "number" },
      },
      errorMessage: {
        "properties.perHourRupee": "PerHourRupee must be a fill",
        "properties.totalHourOfLateEntryOrEaryOut": "TotalHour must be a fill",
      },
    },
  },
  additionalProperties: false,
};

module.exports = attendanceValidator;
