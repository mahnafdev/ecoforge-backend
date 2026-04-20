import status from "http-status";
import { asyncHandler } from "../../middlewares/asyncHandler.middleware";
import { responseUtils } from "../../utils/response";
import { ideaModerationService } from "./ideaModeration.service";
import { Request, Response } from "express";

const getAllIdeas = asyncHandler(async (req: Request, res: Response) => {
	const result = await ideaModerationService.getAllIdeas();

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.OK,
		message: "All ideas retrieved successfully",
		data: result,
	});
});

const reviewIdea = asyncHandler(async (req: Request, res: Response) => {
	const ideaId = req.params.id as string;
	const payload = req.body;

	const result = await ideaModerationService.reviewIdea(ideaId, payload);

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.OK,
		message: "Idea reviewed successfully",
		data: result,
	});
});

export const ideaModerationController = {
	getAllIdeas,
	reviewIdea,
};
