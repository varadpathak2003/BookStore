import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authenticationRouter from "./routes/authenticationRouter";
import booksRouter from "./routes/books";
import usersRouter from "./routes/users";



const app=express();

const port=process.env.port;
console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user",usersRouter);
app.use("/books",booksRouter);
app.use("/api",authenticationRouter);

app.listen(port,()=>{
    console.log("Server Started");
});