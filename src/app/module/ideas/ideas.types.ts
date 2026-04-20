export interface ICreateIdeaPayload {
	categoryId: string;
	title: string;
	problem: string;
	solution: string;
	description: string;
	thumbnail?: string;
	status?: "DRAFT" | "PENDING";
	isPaid?: boolean;
	price?: number;
}

export interface IGetIdeasQuery {
	page?: number;
	limit?: number;
	search?: string;
	categoryId?: string;
	isPaid?: boolean;
	sortBy?: "recent" | "top_voted" | "most_commented";
	minVotes?: number;
}

export type IUpdateIdeaPayload = Partial<ICreateIdeaPayload>;
