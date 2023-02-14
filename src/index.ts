import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(cookieParser());

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
