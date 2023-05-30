import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import  'express-async-errors'
import { contact } from './controllers/contact.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js'

const app = express();
dotenv.config();

const corsOptions = {
    origin: process.env.CORSORIGIN,
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => res.send('<h3> Contact Olasunkanmi! </h3>'))
app.post('/contact', contact)

app.use(notFoundMiddleware)

const port = process.env.PORT || 5001
const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()