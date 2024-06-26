import { Router } from "express";
import homeRouter from "./homeRoutes";

const router = Router();

router.use("/", homeRouter);

export default router;
