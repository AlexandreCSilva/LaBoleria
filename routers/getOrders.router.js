import express from 'express';
import { getOrder } from '../controllers/getOrders.controller.js';

const getOrderRouter = express.Router();

getOrderRouter.get('/order', getOrder);

export { getOrderRouter };