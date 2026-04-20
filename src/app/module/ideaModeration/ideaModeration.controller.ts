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

export const ideaModerationController = {
	getAllIdeas,
};
