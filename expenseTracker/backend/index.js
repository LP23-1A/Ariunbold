import express  from "express";
import dotenv from 'dotenv';
import { pool } from "./db.js";
import { user } from "./router/user.js";
import cors from "cors";
import { category } from "./router/category.js";

dotenv.config();
const PORT = process.env.PORT || 8001;
const app = express();

app.use(express.json());

app.use(cors({origin : "*"}));

app.use('/users',user);
app.use('/category', category);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})

app.post("/createTable", async (req, res) => {
    try{
        const tableQueryText = `
        CREATE TABLE IF NOT EXISTS users (
            id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
            email VARCHAR(50) UNIQUE NOT NULL,
            name VARCHAR(50) NOT NULL,
            password VARCHAR(50) NOT NULL,
            avatar_img BYTEA,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            currency_type TEXT DEFAULT 'MNT'
        )`;
        await pool.query(tableQueryText);
        res.send('ok');
    } catch(error) {
        console.error(error)
    }
});

app.post("/createCategory", async (_, res) => {
    try {
      const tableQueryText = `
          CREATE TABLE IF NOT EXISTS category (
            id uuid PRIMARY KEY DEFAULT uuid_generate_v4() ,
            name VARCHAR(100),
            description TEXT,
            createAt TIMESTAMP DEFAULT NOW(),
            updateAt TIMESTAMP DEFAULT NOW(),
            category_image text
          )`;
      await pool.query(tableQueryText);
      res.send('ok');
    } catch (error) {
      console.error(error);
    }
});