import { Router } from "express";
import { addToCart } from "../handlers/transactionHandler";

const router=Router();

router.post("/add",addToCart);

export default router;
