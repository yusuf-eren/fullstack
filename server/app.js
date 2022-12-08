import express from 'express';
import cors from 'cors';

import { botRoute } from './routes/bot.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', botRoute);

export { app };
