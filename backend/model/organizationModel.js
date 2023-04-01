const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const organizationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name of organization"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter a Email"],
      validate: [validator.isEmail, "Please enter valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Minimum 6 Charactor require"],
    },
  },
  { timestamps: true }
);

organizationSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

organizationSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hashSync(this.password, salt);
});

organizationSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

const organization = mongoose.model("organization", organizationSchema);
module.exports = organization;
