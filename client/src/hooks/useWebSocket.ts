import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { IMessage } from '../models';

export function useWebSocket(url: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'UPDATE_MESSAGES') {
        queryClient.setQueryData(
          ['messages'],
          data.messages.map((item: IMessage) => ({
            ...item,
            timeStamp: new Date(item.timeStamp),
          }))
        );
      }
    };

    return () => {
      ws.close();
    };
  }, [url, queryClient]);
}
