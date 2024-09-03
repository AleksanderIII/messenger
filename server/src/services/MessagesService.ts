import MessageStore from '../models/MessagesStore';
import { IMessage } from '../types';

class MessageService {
  private store: MessageStore;

  constructor(store: MessageStore) {
    this.store = store;
  }

  public addMessage(message: IMessage) {
    this.store.addMessage(message);
  }

  public getMessages(): IMessage[] {
    return this.store.getMessages();
  }
}

export default MessageService;
