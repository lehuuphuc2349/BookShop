require("dotenv").config();

const connectDatabase = require("./config/connection");
const booksDatabase = require("./database/books");
const bookModel = require("./models/Book");

connectDatabase();

const importDatabase = async () => {
  try {
    await bookModel.deleteMany({});
    await bookModel.insertMany(booksDatabase);
    console.log("Database Imported Successfully");
    process.exit();
  } catch (error) {
    console.log("Data Import Fail");
    process.exit(1);
  }
};
importDatabase();
