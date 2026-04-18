import { NextFunction, Request, Response } from "express";
import z from "zod";

export const validateRequest = (zodSchema: z.ZodObject) => {
	return (req: Request, _res: Response, next: NextFunction) => {
		const parsedBody = zodSchema.safeParse(req.body);

		if (!parsedBody.success) {
			next(parsedBody.error);
		}

		req.body = parsedBody.data;

		next();
	};
};
