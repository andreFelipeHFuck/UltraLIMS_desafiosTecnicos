import express from "express";
import cors from 'cors';

import db from "./config/dbConnect.js";
import routes from './routes/index.js';
import errorHandler from "./middlewares/errorHandler.js";

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('Conexão com o banco de dados feita com sucesso');
})

const app = express();

app.use(cors());

app.use(express.json());
routes(app);

app.use(
    errorHandler
);

export default app;