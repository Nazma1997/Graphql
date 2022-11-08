const {model, Schema} = require('mongoose');

const authorSchema = new Schema({
    name: String,
    age: Number
});

const AuthorData = model('AuthorData', authorSchema);

module.exports = AuthorData;