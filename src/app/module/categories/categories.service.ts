import status from "http-status";
import { AppError } from "../../errors/AppError";
import { prisma } from "../../lib/prisma";
import { ICreateCategoryPayload, IUpdateCategoryPayload } from "./categories.types";

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

const getCategories = async () => {
	const categories = await prisma.category.findMany({
		where: {
			isDeleted: false,
		},
		include: {
			_count: {
				select: {
					ideas: true,
				},
			},
		},
	});

	return categories;
};

const updateCategory = async (categoryId: string, payload: IUpdateCategoryPayload) => {
	const category = await prisma.category.findUnique({
		where: {
			id: categoryId,
			isDeleted: false,
		},
	});

	if (!category) {
		throw new AppError(status.NOT_FOUND, "Category not found");
	}

	const updatedCategory = await prisma.category.update({
		where: {
			id: categoryId,
		},
		data: payload,
	});

	return updatedCategory;
};

export const categoriesService = {
	createCategory,
	getCategories,
	updateCategory,
};
