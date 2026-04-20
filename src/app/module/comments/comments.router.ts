import { Router } from "express";
import { auth } from "../../middlewares/auth.middleware";
import { validateRequest } from "../../middlewares/validateRequest.middleware";
import { commentsController } from "./comments.controller";
import { createCommentSchema } from "./comments.validation";

const router = Router();

router.post(
	"/:ideaId",
	auth(),
	validateRequest(createCommentSchema),
	commentsController.createComment,
);

router.get("/:ideaId", commentsController.getComments);

export const commentsRouter = router;
