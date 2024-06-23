import { Request, Response } from "express";

export const getHome = (req: Request, res: Response) => {
  res.send("Hello World");
};

export const getAbout = (req: Request, res: Response) => {
  res.send("About Page");
};
