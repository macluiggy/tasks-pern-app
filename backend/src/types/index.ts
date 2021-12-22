import { Request, Response, NextFunction } from "express";

export type HTTPMethods = (
  request: Request,
  response: Response,
  next: NextFunction
) => void;
