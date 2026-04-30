import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();

// ✅ CORS FIX
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.options("*", cors());

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

// routes
app.use("/api/items", itemRoutes);

// DB + server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running"));
  })
  .catch(err => console.log(err));