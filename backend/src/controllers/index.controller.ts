import { HTTPMethods } from "../types";
export const hello: HTTPMethods = (req, res) => {
  res.send("Hello World from api!");
};
