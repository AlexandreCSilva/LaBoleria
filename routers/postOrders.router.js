import express from 'express';
import { postOrder } from '../controllers/postOrders.controller.js';
import { verifyOrder } from '../middlewares/postOrders.middleware.js';

const orderRouter = express.Router();

orderRouter.post('/order', verifyOrder, postOrder);

export { orderRouter };