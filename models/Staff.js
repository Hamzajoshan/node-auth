const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {
  JWT_EXPIRE,
  JWT_SECRET,
  JWT_FORGOT_TOKEN_EXPIRE,
} = require("../config/jwtconfig");
const StaffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Add a name"],
    },
    email: {
      type: String,
      required: [true, "please add an email"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    profile: {
      type: String,
      default: null,
    },

    password: {
      type: String,
      required: [true, "Please Add a password"],
      minLength: 6,
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpired: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
//Encrypting our password before saving it into db.
StaffSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  // this.email = await bcrypt.hash(this.email, salt);
  next();
});
//Sign JWT and return
StaffSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRE,
  });
};
//Sign JWT for forgot password and return
StaffSchema.methods.getSignedJwtTokenForgotPasswod = function () {
  return jwt.sign({ id: this._id }, JWT_SECRET, {
    expiresIn: JWT_FORGOT_TOKEN_EXPIRE,
  });
};

//Match user enetered password to user entered password
StaffSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Staff", StaffSchema);
