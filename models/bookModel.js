import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title       : {type: String, required: true, },
    author      : {type: String, required: true},
    isbn        : {type: String, required: true, unique: true},
    publisher   : {type: String, required: true},
});

let bookModel = mongoose.model('Library', bookSchema);

export default bookModel;