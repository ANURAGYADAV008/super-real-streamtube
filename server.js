import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./src/utils/Youtube.Routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Server 🚀");
});

app.use("/api/v1/youtube", router);

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
