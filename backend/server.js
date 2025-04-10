import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import './config/instrument.js';
import * as Sentry from "@sentry/node"

// Initializing Express
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// DB Connection
await connectDB();

// Senetry Config
Sentry.setupExpressErrorHandler(app);

// Routes
app.get("/", (req, res) => {
    res.send('API Working...')
});

app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is Running on PORT : ${PORT}`);
})