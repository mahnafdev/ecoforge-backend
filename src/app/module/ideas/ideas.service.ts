import { prisma } from "../../lib/prisma";
import { ICreateIdeaPayload } from "./ideas.types";

const createIdea = async (authorId: string, payload: ICreateIdeaPayload) => {
	const idea = await prisma.idea.create({
		data: {
			authorId,
			...payload,
		},
	});

	return idea;
};

export const ideasService = {
	createIdea,
};
