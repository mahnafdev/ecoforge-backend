import dotenv from "dotenv";
import status from "http-status";

dotenv.config();

interface EnvConfig {
	NODE_ENV: string;
	PORT: string;
	DATABASE_URL: string;
}

const loadEnvVars = (): EnvConfig => {
	const requiredEnvVars = ["NODE_ENV", "PORT", "DATABASE_URL"];
	requiredEnvVars.forEach((envVar) => {
		if (!process.env[envVar]) {
			throw new Error(
				`Environment variable ${envVar} is required but not set in .env file.`,
			);
		}
	});
	return {
		NODE_ENV: process.env.NODE_ENV as string,
		PORT: process.env.PORT as string,
		DATABASE_URL: process.env.DATABASE_URL as string,
	};
};

export const envVars = loadEnvVars();
