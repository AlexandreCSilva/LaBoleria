import express from 'express';
import { getOrderById } from '../controllers/getOrdersById.controller.js';

const getOrderByIdRouter = express.Router();

getOrderByIdRouter.get('/orders/:id', getOrderById);

export { getOrderByIdRouter };