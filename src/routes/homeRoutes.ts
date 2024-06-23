import { Router } from "express";
import { getHome, getAbout } from "../controllers/homeController";

const homeRouter = Router();

homeRouter.get("/", getHome);
homeRouter.get("/about", getAbout);

export default homeRouter;
