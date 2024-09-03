import { IMessage } from '../types';

class MessageStore {
  private messages: IMessage[] = [];
  private MAX_MESSAGES = 9;

  public addMessage(message: IMessage) {
    if (this.messages.length >= this.MAX_MESSAGES) {
      this.messages.shift();
    }
    this.messages.push(message);
  }

  public getMessages(): IMessage[] {
    return this.messages;
  }
}

export default MessageStore;
