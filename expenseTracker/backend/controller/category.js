import { pool } from "../db.js";



export const addCategory =  async (req, response) => {
    const { name, description } = req.body;
    try {
        const queryText = `INSERT INTO category (name, description) VALUES ($1, $2) RETURNING *`;
        const res = await pool.query(queryText, [name, description]);
        response.send(res.rows[0]);
    } catch (error) {
        console.error(error);
        response.send("query error")
    }
  };

  export const getCategory = async (req, res) => {
    const { name, id } = req.body
    try {
        const queryText =`SELECT * FROM category`;
        const response = await pool.query(queryText);
        res.send(response.rows);
      } catch (error) {
        console.error(error);
    }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.body;
  try {
        const queryText =`DELETE FROM category WHERE (id='${id}')`;
        const response = await pool.query(queryText);
        res.send('deleted');
    } catch (error) {
        console.error(error);
  }
};