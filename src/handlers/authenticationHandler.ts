import { Request, Response } from "express";
import { verifyToken } from "../jwt";

export function getUserData(request:Request,response:Response){
    
    console.log("AUTH HANDLER");
    const authHeader=request.headers["authorization"];
    const token=authHeader && authHeader.split(" ")[1];

    if (!token){
        return response.status(401).json({ error: "Token missing" }); 
    }

    const decoded=verifyToken(token);

    if (!decoded) {
        return response.status(403).json({ error: "Invalid or expired token" });
    }
    
    return response.status(200).send("Authentication Successful");

}