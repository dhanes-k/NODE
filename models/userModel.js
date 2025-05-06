const pool = require("../db");

const createUser = async (username, mobile_number, user_type) => {
  const query = `
    INSERT INTO users (username, mobile_number, user_type)
    VALUES ($1, $2, $3)
    RETURNING id, username, mobile_number,user_type, created_at;
  `;
  const values = [username, mobile_number, user_type];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const isExistingUser = async (username, mobile_number) => {
  const query = `
      SELECT * FROM users WHERE username = $1 OR mobile_number = $2;
    `;
  const values = [username, mobile_number];
  const result = await pool.query(query, values);
  return result.rows.length > 0;
};

module.exports = { createUser, isExistingUser };
