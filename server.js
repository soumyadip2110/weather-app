import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

app.get('/config', (req, res) => {
    res.json({apiKey: process.env.API_KEY})
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
