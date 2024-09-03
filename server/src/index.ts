import { server } from './httpServer';
import { wss } from './webSocketServer';

const port = process.env.PORT || 3000;

wss.on('connection', () => {
  console.log(`WS client is connected to ws://localhost:${port}`);
});
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
