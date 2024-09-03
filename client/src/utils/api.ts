import { IMessage } from '../models';

export async function checkResponse(response: Response) {
  if (!response.ok) {
    throw new Error('Failed response');
  }
  return response;
}

export function convertTimeStamp(item: IMessage): IMessage {
  return {
    ...item,
    timeStamp: new Date(item.timeStamp),
  };
}
