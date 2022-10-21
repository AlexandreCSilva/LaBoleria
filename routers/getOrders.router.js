import express from 'express';
import { getOrder } from '../controllers/getOrders.controller.js';

const getOrderRouter = express.Router();

getOrderRouter.get('/orders', getOrder);

export { getOrderRouter };