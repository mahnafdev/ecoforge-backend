import z from "zod";

export const createCommentSchema = z.object({
	content: z
		.string("Content - required and string")
		.trim()
		.min(1, "Content - minimum 1 character")
		.max(1000, "Content - maximum 1000 characters"),
});
