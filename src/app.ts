import express, { Application, Request, Response } from "express";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler.middleware";

const app: Application = express();

app.use(
	express.urlencoded({
		extended: true,
	}),
);

app.use(express.json());

// app.use("/api/v1", IndexRouter);

app.get("/", (_req: Request, res: Response) => {
	res.json({
		success: true,
		message: "Welcome to EcoForge server.",
	});
});

app.use(globalErrorHandler);

export { app };
