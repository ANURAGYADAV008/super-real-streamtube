import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config();
const PORT=process.env.PORT||5000;
const app=express();
import router from "./src/utils/Youtube.Routes.js";

app.use(cors({
origin: "http://localhost:5173",  // your frontend origin
  methods: ["GET", "POST"],         
  credentials: true,
}))


app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello From server")
})
app.use('/api/v1/youtube',router);
app.listen(PORT,()=>{
    console.log(`server start Running at ${PORT}`)
})