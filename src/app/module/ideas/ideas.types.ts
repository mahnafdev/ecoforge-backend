export interface ICreateIdeaPayload {
	categoryId: string;
	title: string;
	problem: string;
	solution: string;
	description: string;
	thumbnail?: string;
	status?: "DRAFT" | "PENDING" | "APPROVED" | "REJECTED";
	isPaid?: boolean;
	price?: number;
}
