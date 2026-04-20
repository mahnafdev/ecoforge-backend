import z from "zod";

export const reviewIdeaSchema = z.object({
	status: z.enum(["APPROVED", "REJECTED"]),
	rejectionFeedback: z
		.string("Rejection Feedback - optional and string")
		.trim()
		.max(256, "Rejection Feedback - maximum 256 characters")
		.optional(),
});
