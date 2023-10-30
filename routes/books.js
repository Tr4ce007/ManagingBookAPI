import express from 'express';

import { getBooks, createBook, getBook, updateBook, deleteBook } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', createBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;