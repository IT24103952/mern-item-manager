import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();

// FIXED CORS CONFIG (IMPORTANT)
app.use(
  cors({
    origin: "*", // allow all (quick fix)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Handle preflight requests explicitly
app.options("*", cors());

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Item Manager API is running..." });
});

// Routes
app.use("/api/items", itemRoutes);

// Port
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error.message);
    process.exit(1);
  });