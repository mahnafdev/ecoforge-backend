import { Router } from "express";
import { authRouter } from "../module/auth/auth.router";
import { usersRouter } from "../module/users/users.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);

export const indexRouter = router;
