import { Request, Response } from 'express';

const signup = async (req: Request, res: Response) => {
  res.send('hello');
};

export const UserController = {
  signup,
};
