import { Router } from "express";
import { ideaModerationController } from "./ideaModeration.controller";
import { UserRole } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/auth.middleware";
import { validateRequest } from "../../middlewares/validateRequest.middleware";
import { reviewIdeaSchema } from "./ideaModeration.validation";

const router = Router();

router.get("/all", auth(UserRole.ADMIN), ideaModerationController.getAllIdeas);

router.patch(
	"/:id/review",
	auth(UserRole.ADMIN),
	validateRequest(reviewIdeaSchema),
	ideaModerationController.reviewIdea,
);

export const ideaModerationRouter = router;
