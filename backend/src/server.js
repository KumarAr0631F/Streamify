import express from 'express';
import "dotenv/config";
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
    connectDB();
})
