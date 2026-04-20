export interface IReviewIdeaPayload {
	status: "APPROVED" | "REJECTED";
	rejectionFeedback?: string;
}
