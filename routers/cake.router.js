import express from 'express';
import { postCake } from '../controllers/cakes.controller.js';
import { verifyCake } from '../middlewares/cakes.middleware.js';

const cakeRouter = express.Router();

cakeRouter.post('/cakes', verifyCake, postCake);

export { cakeRouter };