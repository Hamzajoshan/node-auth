const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/testDb");
const auth = require("./routes/auth");
const staff = require("./routes/staff");
connectDB();
app.use(express.json());
//cookie parser
app.use(cookieParser());

app.use("/api/v1/auth", auth);
app.use("/api/v1/staff", staff);
app.use(errorHandler);
module.exports = app;
