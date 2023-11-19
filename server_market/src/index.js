import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import categoryRouter from './routes/categories';
import productsRouter from './routes/products';
import userRouter from './routes/user';
import authRouter from './routes/auth';
import uploadImage from './routes/upload';
import cookieParser from 'cookie-parser';
import checkOut from './routes/orders'
const app = express();
dotenv.config();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/api', categoryRouter);
app.use('/api', productsRouter);
app.use('/api', uploadImage);
app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', checkOut);
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGODB_LOCAL;
mongoose
   .connect(MONGO_URL)
   .then(() => console.log('connected to db'))
   .catch((err) => console.log('error in connect db'));
app.listen(PORT, () => {
   console.log(`listening success ${PORT}`);
});