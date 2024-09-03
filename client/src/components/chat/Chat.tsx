import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import ChatMessages from './messages/ChatMessages';
import ChatControls from './controls/ChatControls';
import { createMessage, fetchMessages } from '../../api/api';

import { IMessage } from '../../models';

import styles from './Chat.module.css';

const Chat = () => {
  const queryClient = useQueryClient();

  const {
    data: messages,
    error,
    isLoading,
  } = useQuery<IMessage[]>({
    queryKey: ['messages'],
    queryFn: fetchMessages,
  });

  const mutation = useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
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
