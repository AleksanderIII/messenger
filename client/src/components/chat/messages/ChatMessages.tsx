import { Fragment, useEffect, useRef } from 'react';

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
          {messages.map((message, index) => (
            <Fragment key={message.id}>
              {index === 0 ||
              new Date(messages[index - 1].timeStamp).getDate() !==
                new Date(message.timeStamp).getDate() ? (
                <p>
                  {new Date(message.timeStamp).toLocaleDateString([], {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              ) : null}
              <div className={styles.row}>
                <p>{message.text}</p>
                <p className={styles.row_timestamp}>
                  {new Date(message.timeStamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  })}
                </p>
              </div>
            </Fragment>
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
