import express from 'express';
import { postOrder } from '../controllers/orders.controller.js';
import { verifyOrder } from '../middlewares/orders.middleware.js';

const orderRouter = express.Router();

orderRouter.post('/order', verifyOrder, postOrder);

export { orderRouter };