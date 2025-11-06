import { clerkMiddleware, requireAuth } from '@clerk/express';
import 'dotenv/config';
import express from 'express';
import connectDB from './config/database.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

connectDB();

app.use(clerkMiddleware());

app.get( "/health", async(req, res) => {
    try {
        res.status(200).send("Health O.K." );
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
      }
});

app.get( "/api/auth", () => {});
app.get( "/api/zones", () => {});
app.get( "/api/runs", () => {});
app.get( "/api/leaderbaord", () => {});
app.get( "/api/runner", requireAuth() ,(req, res) => {});

app.listen(PORT, () => {
    try{
        console.log(`API server running on http://localhost:${PORT}`);
    }catch(err){
        console.log(`error listening to port ${PORT}`);
    } 
});