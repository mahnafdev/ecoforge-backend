export type TStatusCode = 200 | 201 | 204 | 400 | 401 | 403 | 404 | 409 | 500;

export interface IErrorResponse {
	statusCode?: number;
	success: boolean;
	message: string;
	stack?: string;
	errors?: object[];
}
