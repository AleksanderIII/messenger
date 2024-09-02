class MessageStore {
  private messages: string[] = [];
  private MAX_MESSAGES = 9;

  public addMessage(message: string) {
    if (this.messages.length >= this.MAX_MESSAGES) {
      this.messages.shift();
    }
    this.messages.push(message);
  }

  public getMessages(): string[] {
    return this.messages;
  }
}

export default MessageStore;
