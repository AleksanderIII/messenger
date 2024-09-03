import { useQuery } from '@tanstack/react-query';

import { fetchMessages } from '../services/messageService';
import { IMessage } from '../models';

export function useMessagesQuery() {
  return useQuery<IMessage[]>({
    queryKey: ['messages'],
    queryFn: fetchMessages,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
}
