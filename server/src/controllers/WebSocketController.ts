import { WebSocket } from 'ws';

class WebSocketController {
  public static handleConnection(ws: WebSocket) {
    console.log('Connected');

    ws.on('message', (message) => {
      console.log('Received message:', message);
    });

    ws.on('close', () => {
      console.log('Connection closed');
    });

    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });
  }
}

export default WebSocketController;
