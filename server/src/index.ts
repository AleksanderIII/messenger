import express, { Request, Response } from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';

import WebSocketController from './controllers/WebSocketController';
import messagesRoutes from './routes/messages';

const app = express();
const port = 3000;

const server = http.createServer(app);
const wss = new WebSocketServer({ server });
wss.on('connection', WebSocketController.handleConnection);

app.use(express.json());

app.use('/messages', messagesRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource could not be found.',
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
