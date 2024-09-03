import { IMessage } from '../../../../models';
import { extractTimeFromDate } from '../../../../utils';

import styles from './ChatMessage.module.css';

interface IChatMessageProps {
  message: IMessage;
  index: number;
}

const ChatMessage = ({ message }: IChatMessageProps) => {
  return (
    <div className={styles.row}>
      <p>{message.text}</p>
      <p className={styles.row_timestamp}>
        {extractTimeFromDate(message.timeStamp)}
      </p>
    </div>
  );
};

export default ChatMessage;
