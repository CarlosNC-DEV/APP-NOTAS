import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import tareas from './routes/tareas.routes.js';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(tareas);

export default app;