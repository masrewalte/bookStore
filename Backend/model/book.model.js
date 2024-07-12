import mongoose from "mongoose";

const bookSchemma = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
});

const Book = mongoose.model("Book", bookSchemma);

export default Book;
