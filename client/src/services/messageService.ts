import { MESSAGES_ENDPOINT } from '../config';
import { IMessage } from '../models';
import { checkResponse, convertTimeStamp } from '../utils/api';

export async function fetchMessages(): Promise<IMessage[]> {
  const response = await fetch(`${MESSAGES_ENDPOINT}`);
  await checkResponse(response);
  const data = await response.json();
  return data.map(convertTimeStamp);
}

export async function createMessage(
  newMessage: Omit<IMessage, 'id'>
): Promise<{ message: string; success: boolean }> {
  const response = await fetch(`${MESSAGES_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMessage),
  });
  await checkResponse(response);
  return await response.json();
}
