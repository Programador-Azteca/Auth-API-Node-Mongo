import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IPayload {
  userId: string;
  iat: number;
  exp: number;
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'test') as IPayload;
    // @ts-ignore
    req.userId = payload.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid Token' });
  }
};
