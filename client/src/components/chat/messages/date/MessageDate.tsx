import { IMessage } from '../../../../models';
import { checkDateDifference, extractDayFromDate } from '../../../../utils';

interface IMessageDateProps {
  message: IMessage;
  prevMessage?: IMessage;
  index: number;
}

const MessageDate = ({ message, prevMessage, index }: IMessageDateProps) => {
  const shouldBeDisplayed =
    index === 0 ||
    checkDateDifference(prevMessage!.timeStamp, message.timeStamp);

  return (
    <>
      {shouldBeDisplayed ? (
        <p>{extractDayFromDate(message.timeStamp)}</p>
      ) : null}
    </>
  );
};

export default MessageDate;
