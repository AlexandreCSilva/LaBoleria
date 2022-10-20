import express from 'express';
import { postClient } from '../controllers/clients.controller.js';
import { verifyClient } from '../middlewares/clients.middleware.js';

const clientRouter = express.Router();

clientRouter.post('/clients', verifyClient, postClient);

export { clientRouter };