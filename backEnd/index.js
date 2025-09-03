import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import schoolRoutes from "./routes/schoolRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// connect to DB
await connectDB();

// ✅ Middleware
app.use(express.json());

// ✅ Enable CORS so React (5173) can call API
app.use(
  cors({
    origin: [
      "https://school-db-yc8e.vercel.app", // production frontend
      "http://localhost:5173",             // local dev
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);


// ✅ Serve images if you store in /uploads
//app.use("/uploads", express.static("uploads"));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// sample route
app.get("/", (req, res) => {
  res.send("Server running & MongoDB connected!");
});

app.use("/api", schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
