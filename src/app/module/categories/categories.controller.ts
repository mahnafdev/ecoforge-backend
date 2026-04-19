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

const getCategories = asyncHandler(async (_req: Request, res: Response) => {
	const result = await categoriesService.getCategories();

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.OK,
		message: "Categories retrieved successfully",
		data: result,
	});
});

const updateCategory = asyncHandler(async (req: Request, res: Response) => {
	const categoryId = req.params.id as string;
	const payload = req.body;

	const result = await categoriesService.updateCategory(categoryId, payload);

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.OK,
		message: "Category updated successfully",
		data: result,
	});
});

const deleteCategory = asyncHandler(async (req: Request, res: Response) => {
	const categoryId = req.params.id as string;

	const result = await categoriesService.deleteCategory(categoryId);

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.OK,
		message: "Category deleted successfully",
		data: result,
	});
});

export const categoriesController = {
	createCategory,
	getCategories,
	updateCategory,
	deleteCategory,
};
