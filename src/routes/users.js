import controller from '../controllers/users.js';
import checkToken from '../middlewares/checkToken.js';
import { Router } from "express";

const router = Router();

router.post('/register', controller.REGISTER);
router.get('/users', checkToken, controller.GET);
router.post('/login', controller.LOGIN);
router.get('/mybooks', checkToken, controller.MYBOOKS);
router.get('/mybooks/liked', checkToken, controller.LIKEDBOOKS);
router.get('/mybooks/store', checkToken, controller.STOREDBOOKS);
router.post('/store', checkToken, controller.ADDSTORE);


export default router;