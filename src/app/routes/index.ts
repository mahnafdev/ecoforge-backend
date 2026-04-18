import { Router } from "express";
import { authRouter } from "../module/auth/auth.router";
import { usersRouter } from "../module/users/users.router";
import { categoriesRouter } from "../module/categories/categories.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);

export const indexRouter = router;
