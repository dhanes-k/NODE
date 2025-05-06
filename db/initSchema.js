const pool = require('./index');
const userSchema = require('../schema/userSchema');

const initSchema = async () => {
  try {
    await pool.query(userSchema);
    console.log("✅ User table initialized.");
  } catch (err) {
    console.error("❌ Schema init error:", err);
  }
};

module.exports = initSchema;
