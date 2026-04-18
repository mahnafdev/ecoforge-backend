import status from "http-status";
import { ZodError } from "zod";
import { IErrorResponse } from "../types/error.types";

export const handleZodError = (err: ZodError) => {
	const statusCode = status.BAD_REQUEST; // 400
	const message = "Zod schema validation error";
	const errorDetails: object[] = [];

	err.issues.forEach((issue) => {
		errorDetails.push({
			code: issue.code,
			path: issue.path.join(".") || "unknown",
			message: issue.message,
		});
	});

	const response: IErrorResponse = {
		statusCode,
		success: false,
		message,
		errors: errorDetails,
	};

	return response;
};
