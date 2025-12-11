import { Request, Response } from "express";
import { generateToken } from "../jwt";
import { pool } from "../models/db";

export async function registerUser(request: Request, response: Response) {

    const { username, email, password } = request.body;
    console.log('Received user data:', { username, email, password });

    if (!username || !email || !password) {
        return response.status(400).json({ message: 'Missing required fields' });
    }

    try {
        //check if user is already existing
        const [rows] = await pool.query(`select UserID FROM Users where Email = ? or Username = ?`, [email, username]);
        if ((rows as any).length > 0) {
            return response.status(400).json("User already exists");
        }

        await pool.query("INSERT INTO Users (Username, Email, Password) VALUES (?, ?, ?)", [username, email, password]);
    }

    catch (error) {
        console.error(error);
        return response.status(400).send("Issue");
    }

    return response.status(201).json({ message: 'Registration successful' });
} 

export async function loginUser(request: Request, response: Response) {
    console.log("Login User Handler")
    const {email,password}=request.body;
    
    try{
        const result=await pool.query("select * from users where email=? and password=?",[email,password]);
        const users=result[0] as any[];

        if (users.length===0){
            return response.status(400).send("Invalid email or password");
        }

        const user=users[0];

        //generate Token
        const token=generateToken(user.userID,user.Emailmail);
        
        response.json({
            message:"Login Successfull",
            token:token,
            user:{userID:user.UserID,email:user.email,name:user.name}
        });
    }
    catch (error) {
        console.error('Error:', error);
        response.status(500).json({ message: 'Server error' });
    }
}