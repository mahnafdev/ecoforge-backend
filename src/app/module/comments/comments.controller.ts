import { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.middleware";
import { commentsService } from "./comments.service";
import { responseUtils } from "../../utils/response";
import status from "http-status";

const createComment = asyncHandler(async (req: Request, res: Response) => {
	const userId = req.user.id;
	const ideaId = req.params.ideaId as string;
	const payload = req.body;

	const result = await commentsService.createComment(userId, ideaId, payload);

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.CREATED,
		message: "Comment added successfully",
		data: result,
	});
});

export const commentsController = {
	createComment,
};
