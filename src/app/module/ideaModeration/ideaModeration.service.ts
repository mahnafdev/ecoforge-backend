import { prisma } from "../../lib/prisma";

const getAllIdeas = async () => {
	const ideas = await prisma.idea.findMany({
		where: {
			isDeleted: false,
		},
		include: {
			author: {
				select: {
					name: true,
					email: true,
					image: true,
					role: true,
					isBanned: true,
					isDeleted: true,
					createdAt: true,
				},
			},
			category: {
				select: {
					name: true,
					icon: true,
					description: true,
					isDeleted: true,
					createdAt: true,
				},
			},
			votes: {
				select: {
					id: true,
					type: true,
					userId: true,
					createdAt: true,
				},
			},
			comments: {
				select: {
					id: true,
					userId: true,
					content: true,
					createdAt: true,
				},
			},
			payments: {
				select: {
					id: true,
					userId: true,
					amount: true,
					transactionId: true,
					createdAt: true,
				},
			},
		},
	});

	return ideas;
};

export const ideaModerationService = {
	getAllIdeas,
};
