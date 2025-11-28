import { Request, Response } from "express";
import { pool } from "../models/db";

export async function getBook(request: Request, response: Response) {
    const id = parseInt(request.params.id!);

    try {
        const result = await pool.query('SELECT * FROM Books WHERE BookID = ?', [id]);
        const books = result[0] as any[];
        
        if (books.length === 0) {
            return response.status(404).json({ message: 'Book not found' });
        }
        
        response.json(books[0]);
    } catch (error) {
        console.error('Error fetching book:', error);
        response.status(500).json({ message: 'Server error' });
    }
}


export async function addBook(request: Request, response: Response) {
    const { title, author, description, price, quantity } = request.body;
    try {
        await pool.query("Insert into Books (Title, Author, Description, Price, Quantity)VALUES (?, ?, ?, ?, ?)", [title, author, description, price, quantity]);
        response.status(201).send("Book Saved successfully");
    }
    catch (error) {
        console.log(error);
        response.status(500).json({ message: 'Failed to create book' });
    }
}

export async function getAllBooks(request: Request, response: Response) {
    try {
        const result = await pool.query('Select * From Books where quantity > 0');
        const books = result[0] as any[];
        
        response.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        response.status(500).json({ message: 'Server error' });
    }
}
