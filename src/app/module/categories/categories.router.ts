import { Router } from "express";
import { UserRole } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/auth.middleware";
import { validateRequest } from "../../middlewares/validateRequest.middleware";
import { categoriesController } from "./categories.controller";
import { createCategorySchema } from "./categories.validation";

const router = Router();

router.post(
	"/",
	auth(UserRole.ADMIN),
	validateRequest(createCategorySchema),
	categoriesController.createCategory,
);

export const categoriesRouter = router;
