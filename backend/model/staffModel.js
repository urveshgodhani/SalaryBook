const mongoose = require("mongoose");

const staffSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        salary: {
            base: {
                type: Number,
                required: true
            },
            pf: {
                type: Number,
                required: true
            },
            salaryType: {
                type: String,
                default: "Monthly",
                required: true
            }
        },
        organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "organization",
            required: true
        },
        perDaySalary: {
            type: Number,
            default: 0
        },
        workingWeekDay: {
            enum: [0, 1, 2, 3, 4, 5, 6],
            required: true
        }
    },
    { timestamps: true }
);

const staff = mongoose.model("staff", staffSchema);
module.exports = staff;