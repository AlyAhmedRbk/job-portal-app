import express from 'express';
import cors from 'cors';
import 'dotenv/config';


// Initializing Express
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send('API Working...')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is Running on PORT : ${PORT}`);
})