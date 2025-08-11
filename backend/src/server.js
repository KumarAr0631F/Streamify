import express from 'express';
import "dotenv/config";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from "path";

import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import chatRoutes from './routes/chat.route.js';

import { connectDB } from './lib/db.js';

const app = express();
const port = process.env.PORT || 3000;

const __dirname = path.resolve();

const allowedOrigins = [ // local dev
  "https://streamify-frontend-mp5a.onrender.com/login" // deployed frontend
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}))
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/chat", chatRoutes)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
    connectDB();
})
