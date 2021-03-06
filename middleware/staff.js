const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");
const Staff = require("../models/Staff");
const { JWT_SECRET } = require("../config/jwtconfig");
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  //   else if (req.cookies.token) {
  //     token = req.cookies.token;
  //   }
  //Make Sure Token exists
  if (!token) {
    return next(new ErrorResponse("Not Authorized to Access this route", 401));
  }
  //verifying token
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded.id);
    console.log(decoded);
    req.staff = await Staff.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorResponse("Not Authorized to Access this route", 401));
  }
});
