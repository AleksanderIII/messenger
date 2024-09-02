import express, { Request, Response, NextFunction } from 'express';

import messagesRoutes from './routes/messagesRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/messages', messagesRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource could not be found.',
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
