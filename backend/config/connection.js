require("dotenv").config();
const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Database Successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDatabase;
