import { IWebSocketController } from '../controllers/WebSocketController';
import { IMessageStore } from '../models/MessagesStore';
import { IMessage } from '../types';

class MessageService {
  private store: IMessageStore;
  private webSocketController: IWebSocketController;

  constructor(store: IMessageStore, webSocketController: IWebSocketController) {
    this.store = store;
    this.webSocketController = webSocketController;
  }

  public addMessage(message: IMessage) {
    this.store.addMessage(message);
    this.webSocketController.broadcastMessages(this.store.getMessages());
  }

  public getMessages(): IMessage[] {
    return this.store.getMessages();
  }
}

export default MessageService;
