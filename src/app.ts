import express from 'express';
import productsRouter from './routers/productsRouter';
import usersRouter from './routers/usersRouter';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());

app.use(loginRouter);
app.use(productsRouter);
app.use(usersRouter);

export default app;
