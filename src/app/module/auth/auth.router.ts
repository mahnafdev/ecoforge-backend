import { Router } from "express";
import { authController } from "./auth.controller";
import { validateRequest } from "../../middlewares/validateRequest.middleware";
import { loginUserSchema, signupMemberSchema, updatePasswordSchema } from "./auth.validation";
import { auth } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/signup", validateRequest(signupMemberSchema), authController.signupMember);

router.post("/login", validateRequest(loginUserSchema), authController.loginUser);

router.get("/logout", auth(), authController.logoutUser);

router.post("/renew-tokens", auth(), authController.renewTokens);

router.post(
	"/update-password",
	auth(),
	validateRequest(updatePasswordSchema),
	authController.updatePassword,
);

export const authRouter = router;
