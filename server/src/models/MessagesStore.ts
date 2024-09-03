import { v4 as uuidv4 } from 'uuid';

import { IMessage } from '../types';

export interface IMessageStore {
  addMessage(message: Omit<IMessage, 'id'>): void;
  getMessages(): IMessage[];
}

class MessageStore implements IMessageStore {
  private messages: IMessage[] = [];
  private MAX_MESSAGES = 9;

  public addMessage(message: Omit<IMessage, 'id'>) {
    if (this.messages.length >= this.MAX_MESSAGES) {
      this.messages.shift();
    }
    this.messages.push({ ...message, id: uuidv4() });
  }

  public getMessages(): IMessage[] {
    return this.messages;
  }
}

export default MessageStore;
