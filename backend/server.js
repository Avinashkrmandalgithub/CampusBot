import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import connectToDb from "./src/config/db.js";

const PORT = process.env.PORT;

connectToDb().then(() => {
  app.listen(PORT, () => {
    console.log(`CampusBot is Running on ${PORT}`);
  });
});
