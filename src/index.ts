import express from 'express';
import type { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';
import cors from 'cors';
import corsOptions from './configs/cors';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', routes);
app.use((error, req, res) => {});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
