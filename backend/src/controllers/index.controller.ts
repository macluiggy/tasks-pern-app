import { HTTPMethods } from "../types";
export const hello: HTTPMethods = (req, res) => {
  res.type("txt").send("hello");
};
