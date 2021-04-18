const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Not Found Books" });
  }
};
const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Not Found Book" });
  }
};
module.exports = {
  getAllBooks,
  getBookById,
};
