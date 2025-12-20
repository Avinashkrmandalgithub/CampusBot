import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes
import chatRoutes from "./routes/chat.route.js";
import adminRoutes from "./routes/admin.route.js";

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
app.use("/api/chat", chatRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("CampusBot is Ready");
});

export default app;
