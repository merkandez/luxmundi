import express, { Application } from "express";
import connectToMongoDB from "./database/db";
import memeRoutes from "./routes/memeRoutes";
import cors from "cors";

export const app: Application = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

//middleware es para convertir json/js-js/json
app.use(express.json());

//para usar la ruta que queremos
app.use("/api/memes", memeRoutes);

const startServer = async () => {
  try {
    await connectToMongoDB();
    console.log("👍 Connection has been established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to MongoDB", error);
    throw error;
  }
};

export const server = app.listen(PORT, () => {
  console.log(`🏃‍♂️ Server running on http://localhost:${PORT}`);
});

startServer();
