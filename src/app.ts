import { toNodeHandler } from "better-auth/node";
import express, { Application, Request, Response } from "express";

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

export { app };
