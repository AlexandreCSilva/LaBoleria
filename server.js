import express from 'express';
import cors from 'cors';
import { cakeRouter } from './routers/cakes.router.js';
import { clientRouter } from './routers/clients.router.js';

const server = express();

server.use(cors());
server.use(express.json());
server.use(cakeRouter);
server.use(clientRouter);

server.listen(5000, () => console.log('Server On'));