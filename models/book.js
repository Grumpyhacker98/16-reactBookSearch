const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Array, required: true },
  link: { type: String, required: true },
  pic: { type: String, required: true },
  description: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
