import express from 'express';
import { postOrder } from '../controllers/postOrders.controller.js';
import { verifyPostOrder } from '../middlewares/postOrders.middleware.js';

const postOrderRouter = express.Router();

postOrderRouter.post('/order', verifyPostOrder, postOrder);

export { postOrderRouter };