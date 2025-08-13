import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config({ path: "./src/.env" });

const app = express();
const PORT = process.env.PORT || 5001;

//middleware to parse JSON
app.use(cors({ origin: "http://localhost:5173", }));
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

// Once the database connected then only the application should start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started in port: ", PORT);
  });
});
