import { TStatusCode } from "../types/error.types";

export class AppError extends Error {
	public statusCode: TStatusCode;

	constructor(statusCode: TStatusCode, message: string, stack: string = "") {
		super(message);
		this.statusCode = statusCode;
		if (stack) this.stack = stack;
		else Error.captureStackTrace(this, this.constructor);
	}
}
