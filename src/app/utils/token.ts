import { Response } from "express";
import ms, { StringValue } from "ms";
import { envVars } from "../config/env";
import { cookieUtils } from "./cookie";

const setSessionTokenCookie = (res: Response, token: string) => {
	const maxAge = ms(envVars.SESSION_TOKEN_EXPIRES_IN as StringValue);

	cookieUtils.setCookie(res, "session_token", token, {
		httpOnly: true,
		secure: true,
		sameSite: "none",
		path: "/",
		maxAge,
	});
};

const clearTokenCookies = (res: Response) => {
	cookieUtils.clearCookie(res, "session_token", {
		httpOnly: true,
		secure: true,
		sameSite: "none",
	});
};

export const tokenUtils = {
	setSessionTokenCookie,
	clearTokenCookies,
};
