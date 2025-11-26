import { Router } from "express";
import { registerUser } from "../handlers/userHandler";

const router=Router();

router.post("/register",registerUser);

export default router;