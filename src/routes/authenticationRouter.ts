import { Router } from "express";
import { getUserData } from "../handlers/authenticationHandler";

const router=Router();
router.get("/protected",getUserData);
export default router;