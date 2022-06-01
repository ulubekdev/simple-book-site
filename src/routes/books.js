import controller from '../controllers/books.js';
import checkToken from '../middlewares/checkToken.js';
import { Router } from "express";

const router = Router();

router.get('/books', controller.getBooks);
router.get('/books/search', controller.getBooksBySearch);
router.get('/books/electron', controller.getElectronBooks);
router.get('/books/audio', controller.getAudioBooks);

router.post('/books', checkToken, controller.addBook);
router.post('/books/store', checkToken, controller.storeBook);
router.put('/books/:book_id', checkToken, controller.updateBook);
router.delete('/books/:book_id', checkToken, controller.deleteBook);
router.put('/books/:book_id/liked', checkToken, controller.likeBook);
router.put('/books/:book_id/unliked', checkToken, controller.unlikeBook);

export default router;