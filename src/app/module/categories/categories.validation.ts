import z from "zod";

export const createCategorySchema = z.object({
	name: z
		.string("Name - required and string")
		.min(1, "Name - minimum 1 character")
		.max(64, "Name - maximum 64 characters"),
	icon: z
		.string("Icon - required and string")
		.min(3, "Icon - minimum 3 characters")
		.max(100, "Icon - maximum 100 characters"),
	description: z
		.string("Description - optional and string")
		.max(256, "Description - maximum 256 characters")
		.optional(),
});

export const updateCategorySchema = createCategorySchema.partial();
