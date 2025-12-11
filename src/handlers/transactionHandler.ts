import { Request, Response } from "express";
import { pool } from "../models/db";

export async function addToCart(request: Request, response: Response) {
    const {id}=request.params;
    console.log(id);
    const books= await pool.query("select * from books where BookID=?",[id]);
}