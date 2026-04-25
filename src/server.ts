import { expressApp } from "./expressApp";
import { envVars } from "./app/config/env";
import { prisma } from "./app/lib/prisma";

const start = async () => {
	try {
		await prisma.$connect();

        expressApp.listen(Number(envVars.PORT), () => {
            console.log(`EcoForge server is running on localhost:${envVars.PORT}`);
        });
	} catch (err) {
		console.error("Unable to start server:", err);
		await prisma.$disconnect();
		process.exit(1);
	}
};

start();

export default expressApp;
