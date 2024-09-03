import { WebSocketServer } from 'ws';
import { server } from './httpServer';
import WebSocketController from './controllers/WebSocketController';

const wss = new WebSocketServer({ server });
wss.on('connection', WebSocketController.handleConnection);

export { wss };
