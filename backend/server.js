import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    withCredentials: true,
  })
);

app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send("CampusBot is Ready")
})

app.listen(PORT, () => {
  console.log(`CampusBot is Running on ${PORT}`);
});
