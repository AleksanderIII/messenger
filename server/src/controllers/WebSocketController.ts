import { WebSocket } from 'ws';
import { IMessage } from '../types';

export interface IWebSocketController {
  broadcastMessages(messages: IMessage[]): void;
}

class WebSocketController implements IWebSocketController {
  private static clients: Set<WebSocket> = new Set();

  public static handleConnection(ws: WebSocket) {
    WebSocketController.clients.add(ws);

    ws.on('message', (message) => {
      console.log('Received message:', message);
    });

    ws.on('close', () => {
      console.log('Connection closed');
      WebSocketController.clients.delete(ws);
    });

    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });
  }

  public broadcastMessages(messages: IMessage[]) {
    const data = JSON.stringify({ type: 'UPDATE_MESSAGES', messages });
    console.log('Broadcasting messages:', data);

    WebSocketController.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  }
}

export default WebSocketController;