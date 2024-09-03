import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  const { method, url } = req;

  console.log(`${method} ${url}`);

  next();
};

export default logger;
