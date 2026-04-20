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

		await prisma.idea.update({
			where: {
				id: ideaId,
			},
			data: {
				upvoteCount: type === "UPVOTE" ? { increment: 1 } : undefined,
				downvoteCount: type === "DOWNVOTE" ? { increment: 1 } : undefined,
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

		await prisma.idea.update({
			where: {
				id: ideaId,
			},
			data: {
				upvoteCount: type === "UPVOTE" ? { increment: 1 } : { decrement: 1 },
				downvoteCount: type === "DOWNVOTE" ? { increment: 1 } : { decrement: 1 },
			},
		});

		return { action: "updated", data: updatedVote };
	}

	const deletedVote = await prisma.vote.delete({
		where: {
			id: existingVote.id,
		},
	});

	await prisma.idea.update({
		where: {
			id: ideaId,
		},
		data: {
			upvoteCount: type === "UPVOTE" ? { decrement: 1 } : undefined,
			downvoteCount: type === "DOWNVOTE" ? { decrement: 1 } : undefined,
		},
	});

	return { action: "deleted", data: deletedVote };
};

export const votesService = {
	vote,
};
