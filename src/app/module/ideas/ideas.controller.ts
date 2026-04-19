import { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.middleware";
import { ideasService } from "./ideas.service";
import { responseUtils } from "../../utils/response";
import status from "http-status";

const createIdea = asyncHandler(async (req: Request, res: Response) => {
	const currentUser = req.user;
	const payload = req.body;

	const result = await ideasService.createIdea(currentUser.id, payload);

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.CREATED,
		message: "Idea created successfully",
		data: result,
	});
});

export const ideasController = {
	createIdea,
};
