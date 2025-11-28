import { Router } from "express";
import { addBook, getAllBooks, getBook } from "../handlers/bookHandler";

let router=Router();

router.get("/:id",getBook);
router.post("/add",addBook);
router.get("/", getAllBooks);


export default router;