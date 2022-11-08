const {model, Schema} = require('mongoose');

const bookSchema = new Schema({
   name: String,
   genre: String,
   authorId: String
});

const BookData = model('BookData', bookSchema);

module.exports = BookData;