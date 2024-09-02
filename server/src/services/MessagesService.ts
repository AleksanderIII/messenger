import MessageStore from '../models/MessagesStore';

class MessageService {
  private store: MessageStore;

  constructor(store: MessageStore) {
    this.store = store;
  }

  public addMessage(message: string) {
    this.store.addMessage(message);
  }

  public getMessages(): string[] {
    return this.store.getMessages();
  }
}

export default MessageService;
