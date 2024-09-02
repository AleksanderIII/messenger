import { useState } from 'react';

import ChatMessages from './messages/ChatMessages';
import ChatControls from './controls/ChatControls';

import { IMessage } from '../../models';

import styles from './Chat.module.css';

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const handleSendMessage = (newMessage: string) => {
    setMessages((value) => [
      ...value,
      { text: newMessage, timeStamp: new Date() },
    ]);
  };

  return (
    <div className={styles.chat}>
      <ChatMessages messages={messages} />
      <ChatControls handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
