import { pool } from "../db.js";



export const addCategory =  async (req, response) => {
    const { categoryName } = req.body;
    try {
        const queryText = "INSERT INTO category (name) VALUES ($1) RETURNING *";
        const res = await pool.query(queryText, [categoryName]);
        response.send(res.rows[0]);
    } catch (error) {
        console.error(error);
    }
  };

  export const getCategory = async (req, res) => {
    try {
        const queryText =`SELECT name FROM category`;
        const response = await pool.query(queryText);
        res.send(response.rows);
      } catch (error) {
        console.error(error);
    }
};

export const deleteCategory = async (req, res) => {
  try {
        const queryText =`DELETE FROM category`;
        const response = await pool.query(queryText);
        res.send(response.rows);
    } catch (error) {
        console.error(error);
  }
};