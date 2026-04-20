import { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.middleware";
import { responseUtils } from "../../utils/response";
import status from "http-status";
import { votesService } from "./votes.service";

const vote = asyncHandler(async (req: Request, res: Response) => {
	const userId = req.user.id;
	const ideaId = req.params.ideaId as string;
	const { type } = req.body;

	const result = await votesService.vote(userId, ideaId, type);

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.OK,
		message: `Vote ${result.action} successfully`,
		data: result.data,
	});
});

export const votesController = {
	vote,
};
