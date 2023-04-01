const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "organization",
      required: true,
    },
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "staff",
      required: true,
    },
    attendanceType: {
      type: String,
      enum: ["P", "A", "HD", "PL"],
      required: true,
    },
    overtime: {
      perHourRupee: {
        type: Number,
      },
      totalHourOfWork: {
        type: Number,
      },
    },
    fine: {
      perHourRupee: {
        type: Number,
      },
      totalHourOfLateEntryOrEaryOut: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

const attendance = mongoose.model("attendance", attendanceSchema);
module.exports = attendance;
