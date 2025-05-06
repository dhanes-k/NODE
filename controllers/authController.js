const { createUser, isExistingUser } = require("../models/userModel");

const register = async (req, res) => {
  try {
    const { username, mobile_number, user_type = 0 } = req.body;

    if (!username || !mobile_number) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    const existingUser = await isExistingUser(username, mobile_number);

    if (existingUser) {
      return res.status(403).json({ error: "User already exists" });
    }

    const newUser = await createUser(username, mobile_number, user_type);
    res.status(201).json({ message: "User created", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
};

module.exports = { register };
