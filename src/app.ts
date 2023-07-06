import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// using route
app.use('/api/v1/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('next chat app server is running');
});

export default app;
