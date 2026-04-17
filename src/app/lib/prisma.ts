import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { envVars } from "../config/env";
import { PrismaClient } from "../../generated/prisma/client";

const adapter = new PrismaPg({ connectionString: envVars.DATABASE_URL });
const client = new PrismaClient({ adapter });

export { client as prisma };
