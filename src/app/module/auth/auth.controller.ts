import { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.middleware";
import { authService } from "./auth.service";
import { responseUtils } from "../../utils/response";
import status from "http-status";
import { tokenUtils } from "../../utils/token";

const signupMember = asyncHandler(async (req: Request, res: Response) => {
	const payload = req.body;

	const result = await authService.signupMember(payload);

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.CREATED,
		message: "Member signed up successfully",
		data: result,
	});
});

const loginUser = asyncHandler(async (req: Request, res: Response) => {
	const payload = req.body;

	const result = await authService.loginUser(payload);

	tokenUtils.setSessionTokenCookie(res, result.token);

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.CREATED,
		message: "User logged in successfully",
		data: result,
	});
});

const logoutUser = asyncHandler(async (req: Request, res: Response) => {
	const result = await authService.logoutUser();

	tokenUtils.clearTokenCookies(res);

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.OK,
		message: "User logged out successfully",
		data: result,
	});
});

const updatePassword = asyncHandler(async (req: Request, res: Response) => {
	const payload = req.body;

	const result = await authService.updatePassword(payload);

	tokenUtils.setSessionTokenCookie(res, result.token!);

	return responseUtils.sendSuccessResponse({
		res,
		statusCode: status.CREATED,
		message: "Password updated successfully",
		data: result,
	});
});

export const authController = {
	signupMember,
	loginUser,
	logoutUser,
	updatePassword,
};
