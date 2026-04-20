import { Router } from "express";
import { auth } from "../../middlewares/auth.middleware";
import { validateRequest } from "../../middlewares/validateRequest.middleware";
import { voteSchema } from "./votes.validation";
import { votesController } from "./votes.controller";

const router = Router();

router.post("/:ideaId", auth(), validateRequest(voteSchema), votesController.vote);

export const votesRouter = router;
