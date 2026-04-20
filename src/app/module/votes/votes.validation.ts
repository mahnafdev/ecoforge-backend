import z from "zod";

export const voteSchema = z.object({
	type: z.enum(["UPVOTE", "DOWNVOTE"]),
});
