import { useEffect, useRef } from 'react';

import { IMessage } from '../../../models';

import styles from './ChatMessages.module.css';

interface IChatMessagesProps {
  messages: IMessage[];
}

const ChatMessages = ({ messages }: IChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={styles.messages_wrapper}>
      {messages.length ? (
        <>
          {messages.map((message) => (
            <div className={styles.row} key={message.timeStamp.toDateString()}>
              <p>{message.text}</p>
              <p className={styles.row_timestamp}>
                {message.timeStamp.toLocaleTimeString()}
              </p>
            </div>
          ))}
        </>
      ) : (
        <p>No messages...</p>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
