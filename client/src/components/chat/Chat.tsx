import { useMutation } from '@tanstack/react-query';

import ChatMessages from './messages/ChatMessages';
import ChatControls from './controls/ChatControls';
import { createMessage } from '../../services/messageService';
import { WEBSOCKET_URL } from '../../config';

import { useWebSocket } from '../../hooks/useWebSocket';
import { useMessagesQuery } from '../../hooks/useMessagesQuery';

import styles from './Chat.module.css';

const Chat = () => {
  const { data: messages, error, isLoading } = useMessagesQuery();
  useWebSocket(WEBSOCKET_URL);

  const mutation = useMutation({
    mutationFn: createMessage,
  });

  const handleSendMessage = (newMessage: string) => {
    mutation.mutate({ text: newMessage, timeStamp: new Date() });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className={styles.chat}>
      {messages && <ChatMessages messages={messages} />}
      <ChatControls handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
