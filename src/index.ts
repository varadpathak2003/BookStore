import dotenv from "dotenv";
dotenv.config();
console.log('DB USER:', process.env.dbUser);  // Should print 'root'

import express from "express";
import booksRouter from "./routes/books";
import usersRouter from "./routes/users";



const app=express();

const port=process.env.port;
console.log(port);


app.use(express.json());
app.use("/user",usersRouter);
app.use("/books",booksRouter)

app.listen(port,()=>{
    console.log("Server Started");
});