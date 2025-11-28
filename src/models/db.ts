import "dotenv";
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({

    host: process.env.dbHost!,
    user: process.env.dbUser!,
    password: process.env.dbPassword!,
    database: process.env.databaseName!,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});