import { IMessage } from '../models';

export async function fetchMessages(): Promise<IMessage[]> {
  const response = await fetch('http://localhost:3000/messages');
  if (!response.ok) {
    throw new Error('Failed response');
  }
  return response.json();
}

export async function createMessage(
  newMessage: Omit<IMessage, 'id'>
): Promise<{ message: string; success: boolean }> {
  const response = await fetch('http://localhost:3000/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMessage),
  });
  if (!response.ok) {
    throw new Error('Failed response');
  }
  return response.json();
}
