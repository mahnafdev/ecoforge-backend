import { Router } from "express";
import { authRouter } from "../module/auth/auth.router";
import { usersRouter } from "../module/users/users.router";
import { categoriesRouter } from "../module/categories/categories.router";
import { ideasRouter } from "../module/ideas/ideas.router";
import { ideaModerationRouter } from "../module/ideaModeration/ideaModeration.router";
import { votesRouter } from "../module/votes/votes.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/ideas", ideasRouter);
router.use("/ideas/admin", ideaModerationRouter);
router.use("/vote", votesRouter);

export const indexRouter = router;
