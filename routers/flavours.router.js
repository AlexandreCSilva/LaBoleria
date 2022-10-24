import express from 'express';
import { postFlavour } from '../controllers/flavours.controller.js';
import { verifyFlavour } from '../middlewares/flavours.middleware.js';

const flavourRouter = express.Router();

flavourRouter.post('/flavours', verifyFlavour, postFlavour);

export { flavourRouter };