import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productsRoute from "./routes/prods.js";
import cors from "cors";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

app.get("/", (req, res) => {
  res.send("hello first req");
});

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/prods", productsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 8080, () => {
  connect();
  console.log("connected to BE! at LC 8080");
});
