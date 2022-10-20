import express from 'express';
import cors from 'cors';
import { cakeRouter } from './routers/cake.router.js';

const server = express();

server.use(cors());
server.use(express.json());
server.use(cakeRouter);

server.listen(5000, () => console.log('Server On'));