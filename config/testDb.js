const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://127.0.0.1/testing-node-auth",
      // "mongodb+srv://hamzajoshan:TGHXFM86DCNHTav@moneyexchanger.recgs.mongodb.net/nodeAuthDB?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );

    console.log(`Mongodb Connected `);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
