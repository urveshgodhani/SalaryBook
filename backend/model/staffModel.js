const mongoose = require("mongoose");

const staffSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      index: { unique: true },
    },
    salary: {
      base: {
        type: Number,
        required: true,
      },
      pf: {
        type: Number,
        required: true,
      },
      salaryType: {
        type: String,
        default: "Monthly",
        required: true,
      },
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "organization",
      required: true,
    },
    perDaySalary: {
      type: Number,
      default: 0,
    },
    workingWeekDay: [{ type: Number, enum: [0, 1] }],
  },
  { timestamps: true }
);
staffSchema.index({ email: 1 }, { unique: true });
const staff = mongoose.model("staff", staffSchema);
module.exports = staff;
