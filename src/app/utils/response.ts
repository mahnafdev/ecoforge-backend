import { Response } from "express";

interface ISuccessResponse<T> {
	res: Response;
	statusCode: 200 | 201 | 204;
	message: string;
	data: T;
}

const sendSuccessResponse = <T>(resData: ISuccessResponse<T>): Response => {
	const { res, statusCode, message, data } = resData;

	return res.status(statusCode).json({
		success: true,
		message,
		data,
	});
};

export const responseUtils = { sendSuccessResponse };
