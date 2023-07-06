import express, { Request, Response } from 'express';

import mongoose from 'mongoose';

const app = express();
const port = 5000;

async function dbConnect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/next');
    console.log('database is connected');
  } catch (error) {
    console.log(`database is not connected`, error);
  }
}
dbConnect();
app.get('/', (req: Request, res: Response) => {
  res.send('next chat app server is running');
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
