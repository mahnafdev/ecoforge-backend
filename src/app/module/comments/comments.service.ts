import { prisma } from "../../lib/prisma";
import { ICreateCommentPayload } from "./comments.types";

const createComment = async (
	userId: string,
	ideaId: string,
	payload: ICreateCommentPayload,
) => {
	const { content } = payload;

	const comment = await prisma.comment.create({
		data: {
			userId,
			ideaId,
			content,
		},
		include: {
			user: {
				select: {
					id: true,
					name: true,
					image: true,
					email: true,
				},
			},
			idea: {
				include: {
					_count: {
						select: {
							votes: true,
							comments: true,
						},
					},
				},
			},
		},
	});

	return comment;
};

const getComments = async (ideaId: string) => {
	const comments = await prisma.comment.findMany({
		where: {
			ideaId,
			isDeleted: false,
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	return comments;
};

export const commentsService = {
	createComment,
	getComments,
};
