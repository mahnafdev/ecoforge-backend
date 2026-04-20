import { Router } from "express";
import { ideaModerationController } from "./ideaModeration.controller";
import { UserRole } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/auth.middleware";

const router = Router();

router.get("/all", auth(UserRole.ADMIN), ideaModerationController.getAllIdeas);

export const ideaModerationRouter = router;
