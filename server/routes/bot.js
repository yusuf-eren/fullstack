import express from 'express';
import { sendMessageController } from '../controllers/bot.js';
const app = express();

app.post('/send-message', sendMessageController);

export { app as botRoute };
