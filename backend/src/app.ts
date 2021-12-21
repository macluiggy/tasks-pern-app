import express, { Request, Response } from "express";
import indexRoute from "./routes/index.route";
import taskRoutes from "./routes/task.routes";
const app = express();

// middlewares
app.use(express.json());

//routes
app.use("/", indexRoute);
app.use("/api", taskRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
