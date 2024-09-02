import { Router, Request, Response } from 'express';

import MessageStore from '../models/MessagesStore';
import MessageService from '../services/MessagesService';

const router = Router();

const messageStore = new MessageStore();
const messageService = new MessageService(messageStore);

router.get('/', (req: Request, res: Response) => {
  res.json(messageService.getMessages());
});

router.post('/', (req: Request, res: Response) => {
  const { message } = req.body;

  messageService.addMessage(message);
  res
    .status(201)
    .json({ success: true, message: 'Message added successfully' });
});

export default router;
