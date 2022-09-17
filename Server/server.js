import {app} from "./app.js";
import Razorpay from "razorpay"
import { connectDB } from "./config/database.js"; 
const PORT = process.env.PORT || "*"



connectDB()
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.listen(PORT,()=>console.log(`server is worlking on ${PORT}`))