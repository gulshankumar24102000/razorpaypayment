import express from "express";
import { config } from "dotenv";
import paymentRoutes from "./routes/paymentRoutes.js";  
import cors from 'cors'

config({path:"./config/config.env"})
export const app=express();
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/api",paymentRoutes)
app.get("/api/getKey",(req,res)=>res.status(200).json({key:process.env.RAZORPAY_API_KEY}))