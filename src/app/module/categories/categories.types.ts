export interface ICreateCategoryPayload {
	icon: string;
	name: string;
	description?: string;
}

export type IUpdateCategoryPayload = Partial<ICreateCategoryPayload>;
