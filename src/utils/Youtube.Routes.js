import express from "express";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const router = express.Router();

router.get("/getvideo", async (req, res) => {
  try {
    const response = await axios.get(process.env.YOUTUBE_API);
        
    res.status(200).send({
      success: true,
      video: response.data,
    });
        
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});

export default router;
