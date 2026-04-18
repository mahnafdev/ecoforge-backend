import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { ZodError } from "zod";
import { envVars } from "../config/env";
import { handleZodError } from "../errors/handleZodError";
import { IErrorResponse, TStatusCode } from "../types/error.types";
import { AppError } from "../errors/AppError";

export const globalErrorHandler = (
	err: Error,
	_req: Request,
	res: Response,
	_next: NextFunction,
) => {
	if (envVars.NODE_ENV === "development") {
		console.error("Error from GEH:", err);
	}

	let errorDetails: object[] = [];
	let statusCode: TStatusCode = status.INTERNAL_SERVER_ERROR;
	let message: string = status[`${statusCode}_MESSAGE`];
	let stack: string | undefined;

	if (err instanceof ZodError) {
		const cleanedError = handleZodError(err);
		statusCode = cleanedError.statusCode as TStatusCode;
		message = cleanedError.message;
		errorDetails = [...(cleanedError.errors as object[])];
	} else if (err instanceof Error) {
		statusCode = err instanceof AppError ? err.statusCode : status.INTERNAL_SERVER_ERROR;
		message = err.message;
		stack = err.stack;
		errorDetails = [err];
	}

	const response: IErrorResponse = {
		success: false,
		message,
		stack: envVars.NODE_ENV === "development" ? stack : undefined,
		errors: envVars.NODE_ENV === "development" ? errorDetails : undefined,
	};

	res.status(statusCode).json(response);
};
