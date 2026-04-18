import { Router } from "express";
import { auth } from "../../middlewares/auth.middleware";
import { usersController } from "./users.controller";

const router = Router();

router.get("/me", auth(), usersController.getMe);

export const usersRouter = router;
