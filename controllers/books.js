import express from 'express';
import mongoose from 'mongoose';

import Book from '../models/bookModel.js';

const router = express.Router();

export const getBooks = async (req, res) => { 
    try {
        const allBooks = await Book.find();
                
        res.status(200).json(allBooks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getBook = async (req, res) => { 
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No book with id: ${id}`);

    try {
        const book = await Book.findById(id);
        
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createBook = async (req, res) => {
    const { title, author, isbn, publisher } = req.body;

    const newBook = new Book({ title, author, isbn, publisher });

    try {
        await newBook.save();

        res.status(201).json( newBook );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, isbn, publisher } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No book with id: ${id}`);

    const updatedBook = {  title, author, isbn, publisher, _id: id };

    await Book.findByIdAndUpdate(id, updatedBook, { new: true });

    res.json(updatedBook);
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No book with id: ${id}`);

    await Book.findByIdAndRemove(id);

    res.json({ message: "Book deleted successfully." });
}

export default router;