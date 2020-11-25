const ErrorResponse = require("../utils/errorResponse");
const bcrypt = require("bcryptjs");
const Staff = require("../models/Staff");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../middleware/async");
const {
  JWT_FORGOT_TOKEN_EXPIRE,
  JWT_SECRET,
  JWT_COOKIE_EXPIRE,
} = require("../config/jwtconfig");

//@desc Register User
//@route POST /api/v1/auth/register
//@access public
exports.registerStaff = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  //create user
  const staff = await Staff.create({
    name,
    email,
    password,
  });
  //getting token
  sendTokenResponse(staff, 200, res);
});

//@desc Login User
//@route POST /api/v1/auth/login
//@access public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  //Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse("Please Provide an email and password", 400));
  }
  //check for user
  /*yahan py hm ny +password is liye use kiya hai q k model men hm ny password ko select
    false rkha huwa h so password select ni hoga is liye hmen usy select krny k liye yeh kaam
    krna pry ga
    */
  const staff = await Staff.findOne({ email }).select("+password");
  if (!staff) {
    return next(new ErrorResponse("Invalid Credentials", 401));
  }

  //check if password matches
  const isMatched = await staff.matchPassword(password);
  if (!isMatched) {
    return next(new ErrorResponse("Invalid Credentials", 401));
  }
  //getting token

  sendTokenResponse(staff, 200, res);
});
//get token from model create cookie and send response
const sendTokenResponse = (staff, statusCode, res) => {
  const token = staff.getSignedJwtToken();
  //httpOnly is used that it only used at client side
  const options = {
    expires: new Date(Date.now() + JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};

//@desc Get Currently Logged in user
//@route GET /api/v1/auth/me
//@access private
exports.getMe = asyncHandler(async (req, res, next) => {
  const staff = await Staff.findById(req.staff.id);
  console.log("user", staff);
  res.status(200).json({
    success: true,
    data: staff,
  });
});

//@desc Forgot password staff
//@route POST /api/v1/staff/forgotPassword
//@access private
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return next(new ErrorResponse("No Email Provided", 404));
  }
  const staff = await Staff.findOne({ email: email });
  if (staff.length < 1) {
    return next(new ErrorResponse("No Email Found", 404));
  }
  sendForgotTokenInReponse(staff, 200, res);
});
//get token from model create cookie and send response
const sendForgotTokenInReponse = async (staff, statusCode, res) => {
  const token = staff.getSignedJwtTokenForgotPasswod();
  const durationSeconds = 3600 * 24 * 1000;
  //saving token to userschema as well.
  await Staff.findOneAndUpdate(
    {
      _id: staff.id,
    },
    {
      resetPasswordToken: token,
      resetPasswordExpired: Date.now() + 1 * durationSeconds,
    }
  );
  //httpOnly is used that it only used at client side
  const options = {
    expires: new Date(
      Date.now() + JWT_FORGOT_TOKEN_EXPIRE * 1 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};

//@desc Reset password Staff
//@route POST /api/v1/staff/resetPassword
//@access private
exports.resetPassword = asyncHandler(async (req, res, next) => {
  const { newPassword, token } = req.body;
  if (token == "") {
    return next(new ErrorResponse("Token Is not provided", 400));
  }
  const decoded = jwt.verify(token, JWT_SECRET);
  console.log(decoded);
  if (!decoded.id) {
    return next(new ErrorResponse("Token Expire", 400));
  }
  if (newPassword == "") {
    return next(new ErrorResponse("Password Is not provided", 400));
  }
  const staff = await Staff.find({
    _id: decoded.id,
    resetPasswordToken: token,
  });
  console.log(staff);
  if (staff.length < 1) {
    return next(new ErrorResponse("Token Expired", 400));
  }
  const salt = await bcrypt.genSalt(10);
  const updateDPassword = await bcrypt.hash(newPassword, salt);
  const update = await Staff.findOneAndUpdate(
    {
      _id: decoded.id,
    },
    {
      resetPasswordToken: null,
      resetPasswordExpired: Date.now() - 10 * 10,
      password: updateDPassword,
    }
  );
  console.log("update", update);
  res.status(200).json({
    success: true,
    message: "Password Updated Successfully",
  });
});
