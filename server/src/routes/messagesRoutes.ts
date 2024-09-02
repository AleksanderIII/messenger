import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
  res.status(201).json('hello world. Get method');
});

router.post('/messages', (req: Request, res: Response) => {
  console.log(req.body.message);
  res.status(201).json('hello world. Post method');
});

export default router;
