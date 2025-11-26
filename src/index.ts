import dotenv from "dotenv";
import express from "express";
import usersRouter from "./routes/users";

dotenv.config();

const app=express();

const port=process.env.port;
console.log(port);


app.use(express.json());
app.use("/user",usersRouter);

app.listen(port,()=>{
    console.log("Server Started");
});