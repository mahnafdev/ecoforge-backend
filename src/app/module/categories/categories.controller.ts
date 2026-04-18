import status from "http-status";
import { asyncHandler } from "../../middlewares/asyncHandler.middleware";
import { responseUtils } from "../../utils/response";
import { categoriesService } from "./categories.service";
import { Request, Response } from "express";

const createCategory = asyncHandler(async (req: Request, res: Response) => {
	const payload = req.body;

	const result = await categoriesService.createCategory(payload);

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.CREATED,
		message: "Category created successfully",
		data: result,
	});
});

export const categoriesController = {
	createCategory,
};
