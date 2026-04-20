import { prisma } from "../../lib/prisma";

const vote = async (userId: string, ideaId: string, type: "UPVOTE" | "DOWNVOTE") => {
	const existingVote = await prisma.vote.findUnique({
		where: {
			userId_ideaId: {
				userId,
				ideaId,
			},
		},
	});

	if (!existingVote) {
		const createdVote = await prisma.vote.create({
			data: {
				userId,
				ideaId,
				type,
			},
		});

		return { action: "added", data: createdVote };
	}

	if (existingVote.type !== type) {
		const updatedVote = await prisma.vote.update({
			where: {
				id: existingVote.id,
			},
			data: {
				type,
			},
		});

		return { action: "updated", data: updatedVote };
	}

	const deletedVote = await prisma.vote.delete({
		where: {
			id: existingVote.id,
		},
	});

	return { action: "deleted", data: deletedVote };
};

export const votesService = {
	vote,
};
