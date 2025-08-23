import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { postProject } from "./controllers/projectController.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("mongo uri not found");
}

// Connect to MongoDB
mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes (define BEFORE app.listen)
app.post("/api/projects", postProject);

// const PORT = port || 3002;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
