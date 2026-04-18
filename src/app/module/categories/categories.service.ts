import status from "http-status";
import { AppError } from "../../errors/AppError";
import { prisma } from "../../lib/prisma";
import { ICreateCategoryPayload } from "./categories.types";

const createCategory = async (payload: ICreateCategoryPayload) => {
	const existingCategory = await prisma.category.findUnique({
		where: {
			name: payload.name,
		},
	});

	if (existingCategory) {
		throw new AppError(status.CONFLICT, "Category already exists");
	}

	const category = await prisma.category.create({
		data: payload,
	});

	return category;
};

export const categoriesService = {
	createCategory,
};
