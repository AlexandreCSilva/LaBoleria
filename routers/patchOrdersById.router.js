import express from 'express';
import { patchOrderById } from '../controllers/patchOrdersById.controller.js';
import { verifyPatchById } from '../middlewares/patchOrdersById.middleware.js';

const patchByIdRouter = express.Router();

patchByIdRouter.patch('/order/:id', verifyPatchById, patchOrderById);

export { patchByIdRouter };