import express  from "express";
import dotenv from 'dotenv';
import postgres from 'postgres';
import bp from 'body-parser';
import { pool } from "./db.js";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(bp.json());


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})

app.get("/users", async (req, res) => {
    try {
        const queryText = "SELECT * FROM users"
        const response = await pool.query(queryText);
        res.send(response.rows);
    } catch(error) {
        console.error(error)
    }
});

app.post("/createTable", async (req, res) => {
    try{
        const tableQueryText = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
        )`;
        await pool.query(tableQueryText);
        res.send('ok');
    } catch(error) {
        console.error(error)
    }
    
});

app.post("/user", async (req, response) => {
    const values = req.body;
    try{
        const queryText = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
        const res = await pool.query(queryText, values);
        response.send(res.rows[0]);
    } catch (error){
        console.error(error)
    }
});