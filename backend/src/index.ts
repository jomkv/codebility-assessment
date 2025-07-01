import express, { Application } from "express";
import asyncHandler from "express-async-handler";
import "dotenv/config";

import todoRoutes from "./routes/todo.routes";
import errorHandler from "./middlewares/error";

// * App
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// * Controllers
app.use("/api/todos", todoRoutes);

// * Default response for non-existent endpoints
app.all(
  "*",
  asyncHandler(() => {
    throw new Error("This endpoint does not exist");
  })
);

app.use(errorHandler);

// * Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
