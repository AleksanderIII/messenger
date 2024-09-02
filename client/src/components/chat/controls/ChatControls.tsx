import { useState } from 'react';

import { Button, Input } from '../../ui';

import styles from './ChatControls.module.css';

interface IChatControls {
  handleSendMessage: (newMessage: string) => void;
}

const ChatControls = ({ handleSendMessage }: IChatControls) => {
  const [newMessage, setNewMessage] = useState('');

  const clickHandler = () => {
    handleSendMessage(newMessage);
    setNewMessage(() => '');
  };

  return (
    <div className={styles.chat_controls}>
      <Input
        className={styles.message_input}
        placeholder='Type new message here'
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <Button className={styles.submit_button} onClickHandler={clickHandler}>
        Send
      </Button>
    </div>
  );
};

export default ChatControls;
