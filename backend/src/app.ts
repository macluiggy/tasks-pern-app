import express from "express";
import indexRoute from "./routes/index.route";
const app = express();

// middlewares
app.use(express.json());

//routes
app.use("/", indexRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
