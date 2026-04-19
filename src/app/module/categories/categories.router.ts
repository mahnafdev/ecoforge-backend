import { Router } from "express";
import { UserRole } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/auth.middleware";
import { validateRequest } from "../../middlewares/validateRequest.middleware";
import { categoriesController } from "./categories.controller";
import { createCategorySchema, updateCategorySchema } from "./categories.validation";

const router = Router();

router.post(
	"/",
	auth(UserRole.ADMIN),
	validateRequest(createCategorySchema),
	categoriesController.createCategory,
);

router.get("/", categoriesController.getCategories);

router.patch(
	"/:id",
	auth(UserRole.ADMIN),
	validateRequest(updateCategorySchema),
	categoriesController.updateCategory,
);

export const categoriesRouter = router;
