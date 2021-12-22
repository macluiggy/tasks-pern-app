import express, { Request, Response, NextFunction } from "express";
import indexRoute from "./routes/index.route";
import taskRoutes from "./routes/task.routes";
import cors from "cors";
const path = require("path");
const app = express();

app.use(
  "/build",
  express.static(path.resolve(__dirname + "../../../frontend/build/"))
);
// middlewares
app.use(express.json());
app.use(cors()); //nunca te olvides de poner esto, si es que vas a usar las api de otro lado, osea de otro dominio o proxy
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  let e = err as ErrorEvent;
  return res.status(500).json({ message: e.message });
});

//routes
app.use("/", indexRoute);
app.use("/api", taskRoutes);
// when the routes load, implement the template
app.get("*", (req, res) => {
  res.status(200).send("dddd");
  // res.sendFile(path.resolve(__dirname + "../../../frontend/build/index.html"));
});

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World!");
// });

export default app;
