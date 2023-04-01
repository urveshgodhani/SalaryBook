const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
    {
        date: {
            type: Date,
            required: true
        },
        staff: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "staff",
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const payment = mongoose.model("payment", paymentSchema);
module.exports = payment;