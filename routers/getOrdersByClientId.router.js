import express from 'express';
import { getOrderByClientId } from '../controllers/getOrdersByClientId.controller.js';
import { verifyClientId } from '../middlewares/clientId.middleware.js';

const getOrderByClientIdRouter = express.Router();

getOrderByClientIdRouter.get('/clients/:id/orders', verifyClientId, getOrderByClientId);

export { getOrderByClientIdRouter };