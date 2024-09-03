import { Fragment, useEffect, useRef } from 'react';

import ChatMessage from './message/ChatMessage';
import MessageDate from './date/MessageDate';

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
              <MessageDate
                message={message}
                prevMessage={messages[index - 1]}
                index={index}
              />
              <ChatMessage message={message} index={index} />
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
