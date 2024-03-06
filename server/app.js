import cors from 'cors';
import express from 'express';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connectDb } from './config/connectDb.js';

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT || 5002;
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

if (!MONGODB_USER || !MONGODB_PASSWORD) {
  console.error("Missing MONGODB_USER or MONGODB_PASSWORD");
  process.exit(1);
}

const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@pretty-please.sjn5r5c.mongodb.net/?retryWrites=true&w=majority&appName=pretty-please`;

const app = express();
connectDb(uri);

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
import userRoutes from './routes/userRoutes.js';

app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
