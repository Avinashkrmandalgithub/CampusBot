import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";

// routes
import adminAuthRoutes from "./routes/adminAuth.route.js";
import chatRoutes from "./routes/chat.route.js";
import adminRoutes from "./routes/admin.route.js";
import newsRoutes from "./routes/news.route.js";
import eventRoutes from "./routes/event.route.js";
import universityRoutes from "./routes/university.route.js";


const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/admin-auth", adminAuthRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/university", universityRoutes);



app.get("/", (req, res) => {
  res.send("CampusBot is Ready");
});

export default app;
