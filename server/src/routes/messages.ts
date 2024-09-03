import { Router, Request, Response } from 'express';

import MessageStore from '../models/MessagesStore';
import MessageService from '../services/MessagesService';

const router = Router();

const messageStore = new MessageStore();
const messageService = new MessageService(messageStore);

router.get('/', (req: Request, res: Response) => {
  const messages = messageService.getMessages();
  res.json(messages);
});

router.post('/', (req: Request, res: Response) => {
  const { text, timeStamp } = req.body;

  messageService.addMessage({ text, timeStamp });
  res
    .status(201)
    .json({ success: true, message: 'Message added successfully' });
});

export default router;
