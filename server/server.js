import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connect from './config/db.js';
import morgan from 'morgan';
import userRouter from './routes/user-routes.js'
import authRouter from './routes/auth-token-router.js'

dotenv.config();

Connect();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));


app.use('/api', userRouter);
app.use('/api', authRouter);

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})

